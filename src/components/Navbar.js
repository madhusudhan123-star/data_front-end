import React, { useState, useEffect } from 'react';
import Bar_chart from '../charts/Bar_chart';
import Geo_chart from '../charts/Geo_chart';
import Line_chart from '../charts/Line_chart';
import Pie_chart from '../charts/Pie_chart';
import RadarChart from '../charts/RadarChart';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [piedata, setPiedata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://data-backend-6h5h.onrender.com/api/data');
        setPiedata(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="flex h-screen">
        <div className="bg-gray-800 text-white p-4">
          <h2 className="text-lg font-bold mb-4"> <NavLink to="/">Navigation</NavLink> </h2>
          <ul className='flex flex-col justify-evenly h-screen'>
            <li>
              <NavLink
                to="/bar-chart"
                activeClassName="text-gray-300"
                className="hover:text-gray-300"
              >
                Bar Chart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/geo-chart"
                activeClassName="text-gray-300"
                className="hover:text-gray-300"
              >
                Geo Chart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/line-chart"
                activeClassName="text-gray-300"
                className="hover:text-gray-300"
              >
                Line Chart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/radar-chart"
                activeClassName="text-gray-300"
                className="hover:text-gray-300"
              >
                Radar Chart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pie-chart"
                activeClassName="text-gray-300"
                className="hover:text-gray-300"
              >
                Pie Chart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Bar_chart />} />
            <Route path="/bar-chart" element={<Bar_chart />} />
            <Route path="/geo-chart" element={<Geo_chart />} />
            <Route path="/line-chart" element={<Line_chart />} />
            <Route path="/radar-chart" element={<RadarChart />} />
            <Route path="/pie-chart" element={
              <div className='flex flex-col justify-center items-center'>
                <h1>Pie Chart Top 10</h1>
                <div className='' style={{ width: "80vw" }}>
                  {piedata.length > 0 && <Pie_chart data={piedata} category="topic" />}
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;