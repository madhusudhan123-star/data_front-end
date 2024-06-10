  // // src/RadarChart.js
  // import React, { useEffect, useState } from 'react';
  // import { Radar } from 'react-chartjs-2';
  // import axios from 'axios';
  // import Datas from './Datas';

  // const RadarChart = () => {
  //   const { data } = Datas();
  //   const [chartData, setChartData] = useState({});

  //   useEffect(() => {
  //         const topics = data.map(item => item.topic);
  //         const intensities = data.map(item => item.intensity);
  //         const likelihoods = data.map(item => item.likelihood);
  //         const relevances = data.map(item => item.relevance);

  //         setChartData({
  //           labels: topics.slice(0, 10),  // Display only the top 10 topics
  //           datasets: [
  //             {
  //               label: 'Intensity',
  //               data: intensities.slice(0, 10),
  //               backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //               borderColor: 'rgba(255, 99, 132, 1)',
  //               borderWidth: 1,
  //             },
  //             {
  //               label: 'Likelihood',
  //               data: likelihoods.slice(0, 10),
  //               backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //               borderColor: 'rgba(54, 162, 235, 1)',
  //               borderWidth: 1,
  //             },
  //             {
  //               label: 'Relevance',
  //               data: relevances.slice(0, 10),
  //               backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //               borderColor: 'rgba(75, 192, 192, 1) ',
  //               borderWidth: 1,
  //             },
  //           ],
  //         });
  //   }, []);

  //   return (
  //     <div>
  //       <h2>Radar Chart</h2>
  //       {Object.keys(chartData).length && <Radar data={chartData} />}
  //     </div>
  //   );
  // };

  // export default RadarChart;

// src/RadarChart.js
import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import useDatas from './Datas';

const RadarChart = () => {
  const { data } = useDatas();
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (data) {
      const topics = data.map(item => item.topic);
      const intensities = data.map(item => item.intensity);
      const likelihoods = data.map(item => item.likelihood);
      const relevances = data.map(item => item.relevance);

      setChartData({
        labels: topics.slice(0, 10), // Display only the top 10 topics
        datasets: [
          {
            label: 'Intensity',
            data: intensities.slice(0, 10),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Likelihood',
            data: likelihoods.slice(0, 10),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Relevance',
            data: relevances.slice(0, 10),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div className='h-screen'>
      <h2>Radar Chart</h2>
      {Object.keys(chartData).length > 0 && <Radar data={chartData} />}
    </div>
  );
};

export default RadarChart;
