import React, { useState } from 'react';
import DataDetails from './DataDetails';
import Graph from './Graph';

function FileDetails(props) {
  const [name, setName] = useState(0);
  function handleName(event) {
    //let testName = event.target.textContent;
    //console.log(event.target.value);
    //console.log(props.data.allData[0]);
    setName(event.target.value);
  }
  return (
    <div className='FileDetails row'>
      <div className='col-sm-12 col-md-4'>
        {props.data.names.map((ename, index) => (
          <li
            onClick={handleName}
            value={index}
            key={index}
            className='nameLists'
          >
            {ename}
          </li>
        ))}
      </div>
      <div className='col-sm-12 col-md-8'>
        <Graph data={props} name={name} />
        <DataDetails data={props} name={name} />
      </div>
    </div>
  );
}

export default FileDetails;
