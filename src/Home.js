import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import { SHELVES } from './constants';

function Home({ books }) {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {SHELVES.map(({ id, name }) => (
            <Shelf
              key={id}
              id={id}
              title={name}
              books={books.filter((book) => book.shelf === id)}
            />
          ))}
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
}

export default Home;
