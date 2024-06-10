import React, { useState, useEffect } from 'react';
import Datas from '../charts/Datas';


const Table = () => {
  const { data } = Datas();
  const [filteredData, setFilteredData] = useState(data);
  const [filters, setFilters] = useState({
    endYear: '',
    topic: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
    city: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = data;
      if (filters.endYear) {
        filtered = filtered.filter(item => item.end_year === filters.endYear);
      }
      if (filters.topic) {
        filtered = filtered.filter(item => item.topic === filters.topic);
      }
      if (filters.sector) {
        filtered = filtered.filter(item => item.sector === filters.sector);
      }
      if (filters.region) {
        filtered = filtered.filter(item => item.region === filters.region);
      }
      if (filters.pestle) {
        filtered = filtered.filter(item => item.pestle === filters.pestle);
      }
      if (filters.source) {
        filtered = filtered.filter(item => item.source === filters.source);
      }
      if (filters.swot) {
        filtered = filtered.filter(item => item.swot === filters.swot);
      }
      if (filters.country) {
        filtered = filtered.filter(item => item.country === filters.country);
      }
      if (filters.city) {
        filtered = filtered.filter(item => item.city === filters.city);
      }
      setFilteredData(filtered);
    };
    applyFilters();
  }, [data, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="filters">
        <h2>Filters</h2>
        <div className="filter-group">
          <label>
            End Year:
            <input
              type="text"
              name="endYear"
              value={filters.endYear}
              onChange={handleFilterChange}
            />
          </label>
          <label>
            Topic:
            <input
              type="text"
              name="topic"
              value={filters.topic}
              onChange={handleFilterChange}
            />
          </label>
          {/* Add more filter inputs here */}
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>End Year</th>
              <th>Intensity</th>
              <th>Sector</th>
              <th>Topic</th>
              <th>Insight</th>
              <th>URL</th>
              <th>Region</th>
              <th>Start Year</th>
              <th>Impact</th>
              <th>Added</th>
              <th>Published</th>
              <th>Country</th>
              <th>Relevance</th>
              <th>Pestle</th>
              <th>Source</th>
              <th>Title</th>
              <th>Likelihood</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.end_year}</td>
                <td>{item.intensity}</td>
                <td>{item.sector}</td>
                <td>{item.topic}</td>
                <td>{item.insight}</td>
                <td><a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.url}
                </a></td>
                <td>{item.region}</td>
                <td>{item.start_year}</td>
                <td>{item.impact}</td>
                <td>{item.added}</td>
                <td>{item.published}</td>
                <td>{item.country}</td>
                <td>{item.relevance}</td>
                <td>{item.pestle}</td>
                <td>{item.source}</td>
                <td>{item.title}</td>
                <td>{item.likelihood}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= filteredData.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;