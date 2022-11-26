import React, { useState } from 'react';
import axios from 'axios';
import { parseEDNString } from 'edn-data';
import FileDetails from './FileDetails';
import Graph from './Graph';
import DataDetails from './DataDetails';

function Url() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState({ ready: false });

  function isEdnMap(v) {
    return v && Object.keys(v).includes('map');
  }

  function ednMapToJSON(entry) {
    var obj = {};
    for (var i = 0; i < entry.map.length; i++) {
      var mapKeyVal = entry.map[i];
      obj[mapKeyVal[0].key] = ednToJSON(mapKeyVal[1]);
    }
    return obj;
  }

  function ednToJSON(v) {
    if (isEdnMap(v)) {
      return ednMapToJSON(v);
    } else if (Array.isArray(v)) {
      return v.map(ednToJSON);
    } else {
      return v;
    }
  }

  function parseEdn(res) {
    return ednToJSON(parseEDNString(res.data));
  }

  function handleResponse(res) {
    let data = parseEdn(res);
    console.log(data);

    let allNames = [];
    let allMeans = [];
    let allGitId = [];
    let allTimestamp = [];
    for (let i = 0; i < data.length; i++) {
      let name = data[i].name;
      console.log(data[i].mean);
      if (allNames.indexOf(name) === -1) {
        allNames.push(name);
        allMeans.push(data[i].mean);
        allGitId.push(data[i]['git-id']);
        allTimestamp.push(data[i].timestamp);
      }
    }

    setResponse({
      ready: true,
      allData: data,
      names: allNames,
      mean: allMeans,
      gitId: allGitId,
      timestamp: allTimestamp,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleUrl(event) {
    setUrl(event.target.value);
  }
  function search() {
    let dataUrl = `${url}`;
    axios.get(dataUrl).then(handleResponse);
  }

  if (response.ready) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='Upload col-sm-12 col-md-3'>
            <form onSubmit={handleSubmit}>
              <input
                type={'text'}
                placeholder={'Insert URL'}
                onChange={handleUrl}
              />
              <button type='search'>Get</button>
            </form>
          </div>
          <div className='col-sm-12 col-md-9'>
            <Graph />
          </div>
        </div>
        <div className='row'>
          <div className='Upload col-sm-12 col-md-3'>
            <FileDetails data={response} />
          </div>
          <div className='col-9'>
            <DataDetails data={response} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <div className='Upload col-sm-12 col-md-3'>
            <form onSubmit={handleSubmit}>
              <input
                type={'text'}
                placeholder={'Insert URL'}
                onChange={handleUrl}
              />
              <button type='search'>Get</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Url;
