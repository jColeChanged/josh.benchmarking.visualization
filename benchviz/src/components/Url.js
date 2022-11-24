import React, { useState } from 'react';
import axios from 'axios';
import { parseEDNString } from 'edn-data';
import FileDetails from './FileDetails';
import Graph from './Graph';
import DataDetails from './DataDetails';

function Url() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState({ ready: false });

  function parseEdn(res) {
    var firstParse = parseEDNString(res.data);
    return firstParse.map((entry) => {
      if (Object.keys(entry).indexOf('map') !== -1) {
        var obj = {};
        for (var i = 0; i < entry.map.length; i++) {
          var mapKeyVal = entry.map[i];
          obj[mapKeyVal[0].key] = mapKeyVal[1];
        }
        return obj;
      } else {
        return entry;
      }
    });
  }
  function handleResponse(res) {
    let data = parseEdn(res);
    console.log(data);

    let allNames = [];
    for (var names = 0; names < data.length; names++) {
      allNames.push(data[names].name);
    }

    console.log(data[0].name);
    setResponse({ ready: true, names: data[0].name, array: allNames });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(event);
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
          <div className='Upload col-3'>
            <form onSubmit={handleSubmit}>
              <input
                type={'text'}
                placeholder={'Insert URL'}
                onChange={handleUrl}
              />
              <button type='search'>Get</button>
            </form>
          </div>
          <div className='col-9'>
            <Graph />
          </div>
        </div>
        <div className='row'>
          <div className='Upload col-3'>
            <FileDetails data={response} />
          </div>
          <div className='col-9'>
            <DataDetails />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className='container'>
        <div className='row'>
          <div className='Upload col-3'>
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
