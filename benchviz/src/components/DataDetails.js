import React from 'react';
function DataDetails(props) {
  var benchmarks = props.data.data.allData.filter((b) => b.name === props.name);
  //let nameData = props.data.data.allData[index];
  //console.log(props.data.data.allData[index]);

  //console.log(name);
  console.log(props.data.data.allData);

  return (
    <div className='DataDetails'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col-12'>Git Id</th>
            <th scope='col'>Mean</th>
            <th scope='col'>Timestamp</th>
            <th scope='col'>RunTime Details</th>
          </tr>
        </thead>
        <tbody>
          {benchmarks.map((benchmark) => (
            <tr>
              <td>{benchmark['git-id']}</td>
              <td>{benchmark['mean']}</td>
              <td>{benchmark['timestamp']}</td>
              <td>{benchmark['runtime-details'].name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDetails;
