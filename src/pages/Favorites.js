import React, {useContext} from 'react';
import Title from '../components/Title';
import { GlobalContext } from '../components/Context/GlobalState';
import Characters from '../components/Characters/Characters';
import ListEpisodes from '../components/Episodes/ListEpisodes';

const Favorites = () => {

    const {charactersFavorites, episodesFavorites} = useContext(GlobalContext);

    console.log(episodesFavorites);

    return(
        <div className="container">
            <Title title={"Favorites"}/>
            <div className="col mb-4 mt-4">
                <h2 className="col mb-4">Characters</h2>
                <Characters characters={charactersFavorites}/>   
            </div>
            <div className="col mb-4 mt-4">
                <h2 className="col mb-4" >Episodes</h2> 
                <ListEpisodes episodes={episodesFavorites}/> 
            </div>
        </div>
    ) 
}

export default Favorites;