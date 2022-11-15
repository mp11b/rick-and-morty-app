import MainContent from '../components/MainContent';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

function Home(){

    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [searchText, setSearchText] = useState('');
  
    let [pageNumber, setPageNumber] = useState(1);
  
    let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchText}`
   
    const reqApiCharacters = async ()=>{
       const api= await fetch(url);
       const charactersApi= await api.json();
       setCharacters(charactersApi.results);
       setInfo(charactersApi.info);
    }
  
    useEffect(() => {
      reqApiCharacters();
    }, [url]);
  
    return (
      <>
        <Search 
        searchText={searchText} 
        setSearchText={setSearchText}
        setPageNumber={setPageNumber}/>
        <div className="container mt-5">
          <MainContent characters={characters}/>
        </div>
        <Pagination
        info={info}
        pageNumber = {pageNumber}
        setPageNumber={setPageNumber}
        />
      </>
    );
}

export default Home;