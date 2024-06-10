import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Table from './page/Table';

const App = () => {
  return (
    <div>
    <div className='h-screen'>
      <Navbar />
    </div>
    <div className='h-screen'>
      <Table />
    </div>
    </div>
  );
};

export default App;