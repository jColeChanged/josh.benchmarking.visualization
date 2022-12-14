import React, { useState } from 'react';
import { Chart as ChartJS, LinearScale } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

ChartJS.register(LinearScale);

function Graph(benchmarks) {
  const [chart, setChart] = useState({
    labels: benchmarks.benchmarks.map((data) => data['timestamp'].slice(0, 4)),
    datasets: [
      {
        label: 'Mean',
        data: benchmarks.benchmarks.map((data) => data['mean']),
      },
    ],
  });

  console.log(benchmarks.benchmarks[0]['mean']);
  console.log(benchmarks.benchmarks[0]['timestamp'].slice(0, 4));

  return (
    <div className='Graph'>
      <Line data={chart} />
    </div>
  );
}

export default Graph;
