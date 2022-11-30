import React, { useState } from 'react';
import Data from './Data';

function Names(props) {
  const [activeIndex, setActiveIndex] = useState('');
  const [name, setName] = useState('');

  function handleClick(index) {
    setActiveIndex(index);
  }
  return (
    <div className='FileDetails row'>
      <div className='col-sm-12 col-md-3'>
        {props.data.names.map((ename, index) => (
          <li
            onClick={() => {
              setName(ename);
              handleClick(index);
            }}
            value={ename}
            key={index}
            className={activeIndex === index ? 'active' : 'unactive'}
            data-toggle='tab'
          >
            {ename}
          </li>
        ))}
      </div>
      <div className='col-sm-12 col-md-9'>
        <Data data={props} name={name} />
      </div>
    </div>
  );
}

export default Names;
