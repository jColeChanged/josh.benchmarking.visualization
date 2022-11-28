import React from 'react';
function DataDetails(props) {
  let index = props.name;
  let nameData = props.data.data.allData[index];
  console.log(props.data.data.allData[index]);

  //console.log(name);
  //console.log(props.data.allData[0]);

  return (
    <div className='DataDetails'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>{nameData.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Git Id</th>
            <td>{nameData['git-id']}</td>
          </tr>
          <tr>
            <th scope='row'>Mean</th>
            <td>{nameData['mean']}</td>
          </tr>
          <tr>
            <th scope='row'>Timestamp</th>
            <td>{nameData['timestamp']}</td>
          </tr>
          <tr>
            <th scope='row'>RunTime Details</th>
            <td>{nameData['runtime-details'].name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataDetails;
