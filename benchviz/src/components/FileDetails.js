import React from 'react';
function FileDetails(props) {
  console.log(props);
  //console.log(props.data.names);
  console.log(props.data.array);
  return (
    <div className='FileDetails'>
      <div>{props.data.array}</div>
    </div>
  );
}

export default FileDetails;
