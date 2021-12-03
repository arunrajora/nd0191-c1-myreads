import './App.css';
import { useEffect, useState } from 'react';
import Search from './Search';
import Home from './Home';
import { Route, Routes } from 'react-router';
import * as BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((result) => setBooks(result));
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home books={books} />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
