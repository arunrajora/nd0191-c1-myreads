import './App.css';
import { useEffect, useState } from 'react';
import Search from './Search';
import Home from './Home';
import { Route, Routes } from 'react-router';
import * as BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);

  const changeShelf = (bookToBeUpdated, shelf) => {
    BooksAPI.update(bookToBeUpdated, shelf).then(() => {
      setBooks(
        books
          .filter((book) => book.id !== bookToBeUpdated.id)
          .concat({
            ...bookToBeUpdated,
            shelf,
          })
      );
    });
  };

  useEffect(() => {
    BooksAPI.getAll().then((result) => setBooks(result));
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route
          index
          element={<Home books={books} changeShelf={changeShelf} />}
        />
        <Route
          path='/search'
          element={<Search books={books} changeShelf={changeShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
