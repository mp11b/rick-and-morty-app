import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters/Characters';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Title from './components/Title';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from './pages/Episodes';
import Favorites from './pages/Favorites';

import {GlobalProvider} from "./components/Context/GlobalState"

function App(){
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Navbar title="Rick and Morty"/>
        </div>

        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/episodes" element = {<Episodes/>}/>
          <Route path="/favorites" element = {<Favorites/>}/>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

const Home =() => {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchText, setSearchText] = useState('');

  let [pageNumber, setPageNumber] = useState(1);

  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchText}`
 
  async function reqApiCharacters() {
    const api = await fetch(url);
    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
    setInfo(charactersApi.info);
  }

  useEffect(() => {
    reqApiCharacters();
  }, [url]);

  return (
    <>
      <Title title={"Characters"}/>
      <Search 
      searchText={searchText} 
      setSearchText={setSearchText}
      setPageNumber={setPageNumber}/>
      <div className="container mt-5">
        <Characters characters={characters}/>
      </div>
      <Pagination
      info={info}
      pageNumber = {pageNumber}
      setPageNumber={setPageNumber}
      />
    </>
  );
}

export default App;
