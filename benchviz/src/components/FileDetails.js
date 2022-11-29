import React, { useState } from 'react';
import DataDetails from './DataDetails';
import Graph from './Graph';

function FileDetails(props) {
  const [name, setName] = useState('');
  return (
    <div className='FileDetails row'>
      <div className='col-sm-12 col-md-3'>
        {props.data.names.map((ename, index) => (
          <li
            onClick={() => setName(ename)}
            value={ename}
            key={index}
            className='nameLists'
          >
            {ename}
          </li>
        ))}
      </div>
      <div className='col-sm-12 col-md-9'>
        <Graph data={props} name={name} />
        <DataDetails data={props} name={name} />
      </div>
    </div>
  );
}

export default FileDetails;
