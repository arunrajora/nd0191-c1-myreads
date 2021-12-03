import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

function Search({ books, changeShelf }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        BooksAPI.search(query).then((result) => {
          if (result && !result.error) {
            setSearchResults(result);
          } else {
            setSearchResults([]);
          }
        });
      } else {
        setSearchResults([]);
      }
    }, 250);
    return () => clearTimeout(timeout);
  }, [query]);
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Search by title, author, or ISBN'
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchResults.map((book) => {
            const shelf =
              books.find((bookOnHomePage) => bookOnHomePage.id === book.id)
                ?.shelf ?? 'none';
            return (
              <Book
                key={book.id}
                book={{ ...book, shelf }}
                changeShelf={changeShelf}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Search;
