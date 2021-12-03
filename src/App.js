import './App.css';
import { useState } from 'react';
import Search from './Search';
import Home from './Home';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return <div className='app'>{showSearchPage ? <Search /> : <Home />}</div>;
}

export default App;
