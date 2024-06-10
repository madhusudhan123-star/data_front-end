import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Datas = () => {
  const [data, setData] = useState([]);
  const [piedata, setPiedata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://data-backend-6h5h.onrender.com/api/data');
        setData(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://data-backend-6h5h.onrender.com/api/data/data');
        setPiedata(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  return {data, piedata};
};

export default Datas;