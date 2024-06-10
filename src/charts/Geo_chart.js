// src/GeoChart.js
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import Datas from './Datas';

const Geo_chart = () => {
  const {data} = Datas();
  const {Country, Relevance} = data;
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if(data){
          const processedData = [['Country', 'Relevance']];
            data.forEach(item => {
              if (item.country && item.relevance) {
                  processedData.push([item.country, item.relevance]);
                }
          });
        
        setChartData(processedData);
    }
  }, []);

  return (
    <div>
      <h2>Geo Chart</h2>
      {chartData && (
        <Chart
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={chartData}
        />
      )}
    </div>
  );
};

export default Geo_chart;
