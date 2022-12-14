import React from 'react';

import Graph from './Graph';

function Data(props) {
  var benchmarks = props.data.data.data.filter((b) => b.name === props.name);

  return (
    <div className='Data'>
      {benchmarks.map((benchmark, index) => (
        <div key={index}>
          <Graph benchmarks={benchmarks} />
          <div className='row'>
            <div className='col-md-3 col-sm-12'>
              <h5>Git-Id</h5>
              <div>{benchmark['git-id'].slice(0, 5)}</div>
            </div>
            <div className='col-md-3 col-sm-12'>
              <h5>Mean</h5>
              <div>{String(benchmark['mean']).slice(0, 6)}</div>
            </div>
            <div className='col-md-3 col-sm-12'>
              <h5>Timestamp</h5>
              <div>{benchmark['timestamp'].slice(0, 10)}</div>
            </div>
            <div className='col-md-3 col-sm-12'>
              <h5>RunDetails</h5>
              <div>{benchmark['runtime-details'].name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Data;
