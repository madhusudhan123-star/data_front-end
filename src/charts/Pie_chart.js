// import React, { useRef, useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const Pie_chart = ({ data, category }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const categoryData = data.reduce((acc, item) => {
//       const categoryValue = item[category];
//       if (acc[categoryValue]) {
//         acc[categoryValue]++;
//       } else {
//         acc[categoryValue] = 1;
//       }
//       return acc;
//     }, {});

//     const chartData = {
//       labels: Object.keys(categoryData),
      
//       datasets: [
//         {
//           data: Object.values(categoryData),
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.6)',
//             'rgba(54, 162, 235, 0.6)',
//             'rgba(255, 206, 86, 0.6)',
//             'rgba(75, 192, 192, 0.6)',
//             'rgba(153, 102, 255, 0.6)',
//             'rgba(255, 159, 64, 0.6)',
//           ],
//           borderWidth: 1,
//         },
//       ],
//     };
//     const chartInstance = new Chart(chartRef.current, {
//       type: 'pie',
//       data: chartData,
//       options: {
//         plugins: {
//           title: {
//             display: true,
//             text: `Distribution by ${category}`,
//           },
//         },
//       },
//     });

//     return () => {
//       chartInstance.destroy();
//     };
//   }, [data, category]);

//   return <canvas ref={chartRef} />;
// };

// export default Pie_chart;


import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Pie_chart = ({ data }) => {
  const chartRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('topic');
  const categories = ['topic', 'region', 'sector', 'country'];

  useEffect(() => {
    const categoryData = data.reduce((acc, item) => {
      const categoryValue = item[selectedCategory];
      if (acc[categoryValue]) {
        acc[categoryValue]++;
      } else {
        acc[categoryValue] = 1;
      }
      return acc;
    }, {});

    const chartData = {
      labels: Object.keys(categoryData),
      datasets: [
        {
          data: Object.values(categoryData),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
          borderWidth: 1,
        },
      ],
    };
    const chartInstance = new Chart(chartRef.current, {
      type: 'pie',
      data: chartData,
      options: {
        plugins: {
          title: {
            display: true,
            text: `Distribution by ${selectedCategory}`,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data, selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className='h-screen'>
      <div>
        <label htmlFor="category-select">Select Category:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Pie_chart;