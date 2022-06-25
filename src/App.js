import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Error from './Components/Error';
import Header from './Components/Header';
import Home from './Components/Home';
function App() {

  const [searchWord, setSearchWord] = useState();
  const getSearch = searchWord => {
    setSearchWord(searchWord);
  }

  return (
    <div className="App">
      <Header getSearch={getSearch} />
      <Routes>
        <Route exact path="/" element={<Home searchWord={searchWord} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
