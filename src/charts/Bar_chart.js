import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Datas from './Datas';
const Bar_chart = () => {
  const { data } = Datas();
  const chartRef = useRef(null);
  const [years, setYears] = useState([]);

  useEffect(() => {
    if(data){
      const startYears = data.map(item => item.start_year).filter(year => year !== '');
      const endYears = data.map(item => item.end_year).filter(year => year !== '');
      const allYears = [...new Set([...startYears, ...endYears])].sort();
      setYears(allYears);
    }
  }, [data]);

  useEffect(() => {
      const chartInstance = new Chart(chartRef.current, {
        type: 'bar',
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
              const sumIntensity = dataForYear.reduce((sum, item) => sum + item.intensity, 0);
              return sumIntensity;
            }),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
              text: 'Intensity',
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

export default Bar_chart;