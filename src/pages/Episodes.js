import React, {useEffect, useState} from 'react';
import Title from '../components/Title';
import ListEpisodes from '../components/Episodes/ListEpisodes.js';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});
    const [searchText, setSearchText] = useState('');

    let [pageNumber, setPageNumber] = useState(1);

    let urlEpisodes = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}&name=${searchText}`

    async function reqApiEpisodes() {
        const api = await fetch(urlEpisodes);
        const episodesApi = await api.json();
        setEpisodes(episodesApi.results);
        setInfo(episodesApi.info);
    }
   
     useEffect(() => {
       reqApiEpisodes();
     }, [urlEpisodes]);

    return(
        <>
        <Title title={"Episodes"} />
        <Search 
        searchText={searchText} 
        setSearchText={setSearchText}
        setPageNumber={setPageNumber}/>
        <div className="container-sm mt-5">
            <ListEpisodes episodes={episodes}/>
        </div>
        <Pagination
        info={info}
        pageNumber = {pageNumber}
        setPageNumber={setPageNumber}
        />
        </>
    ) 
}

export default Episodes;