import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Datas from './Datas';

const Line_chart   = () => {
  const { data} = Datas();
  const chartRef = useRef(null);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const startYears = data.map(item => item.start_year).filter(year => year !== '');
    const endYears = data.map(item => item.end_year).filter(year => year !== '');
    const allYears = [...new Set([...startYears, ...endYears])].sort();
    setYears(allYears);
  }, [data]);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Intensity',
            data: years.map(year => {
              const dataForYear = data.filter(item => {
                return (
                  (item.start_year === year || item.start_year === '') &&
                  (item.end_year === year || item.end_year === '')
                );
              });
              const avgIntensity = dataForYear.reduce((sum, item) => sum + item.intensity, 0) / dataForYear.length;
              return avgIntensity;
            }),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Likelihood',
            data: years.map(year => {
              const dataForYear = data.filter(item => {
                return (
                  (item.start_year === year || item.start_year === '') &&
                  (item.end_year === year || item.end_year === '')
                );
              });
              const avgLikelihood = dataForYear.reduce((sum, item) => sum + item.likelihood, 0) / dataForYear.length;
              return avgLikelihood;
            }),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Relevance',
            data: years.map(year => {
              const dataForYear = data.filter(item => {
                return (
                  (item.start_year === year || item.start_year === '') &&
                  (item.end_year === year || item.end_year === '')
                );
              });
              const avgRelevance = dataForYear.reduce((sum, item) => sum + item.relevance, 0) / dataForYear.length;
              return avgRelevance;
            }),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Value',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Year',
            },
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data, years]);

  return <canvas className='h-screen' ref={chartRef} />;
};

export default Line_chart;