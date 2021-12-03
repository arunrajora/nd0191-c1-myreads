import Shelf from './Shelf';

function Home() {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <Shelf />
          <Shelf />
          <Shelf />
        </div>
      </div>
      <div className='open-search'>
        <a onClick={() => null}>Add a book</a>
      </div>
    </div>
  );
}

export default Home;
