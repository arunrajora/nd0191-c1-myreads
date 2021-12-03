import './App.css';
import { useState } from 'react';
import Search from './Search';
import Home from './Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
