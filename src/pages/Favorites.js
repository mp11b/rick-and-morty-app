import React, {useContext} from 'react';
import Title from '../components/Title';
import { GlobalContext } from '../components/Context/GlobalState';
import Characters from '../components/Characters/Characters';

const Favorites = () => {

    const {charactersFavorites} = useContext(GlobalContext);

    return(
        <div>
            <Title title={"Favorites"}/>
            <div className="col mb-4 mt-4">
                <h1>Characters</h1>
                <Characters characters={charactersFavorites}/>   
            </div>
            <div>
                <h1>Episodes</h1>  
            </div>
        </div>
    ) 
}

export default Favorites;