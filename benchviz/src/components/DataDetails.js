import React from 'react';
function DataDetails(props) {
  console.log(props);
  //console.log(props.data.allData[0]);

  return (
    <div className='DataDetails'>
      <div className='row'>
        <div className='col-sm-12 col-md-3'>
          Name
          {props.data.names.map((ename, index) => (
            <div className='row' key={index}>
              {ename}
            </div>
          ))}
        </div>
        <div className='col-sm-12 col-md-2'>
          Git Id
          {props.data.gitId.map((ename, index) => (
            <div className='row' key={index}>
              {ename}
            </div>
          ))}
        </div>
        <div className='col-sm-12 col-md-2'>Mean</div>
        <div className='col-sm-12 col-md-2'>Timestamp</div>
        <div className='col-sm-12 col-md-2'>Runtime-details</div>
      </div>
    </div>
  );
}

export default DataDetails;
