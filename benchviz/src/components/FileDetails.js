import React from 'react';
function FileDetails(props) {
  return (
    <div className='FileDetails'>
      {props.data.names.map((ename, index) => (
        <li key={index}>{ename}</li>
      ))}
    </div>
  );
}

export default FileDetails;
