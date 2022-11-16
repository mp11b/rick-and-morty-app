import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

function CharacterFavoriteButton({character}) {

    const {addCharacterToFavorites, removeCharacterToFavorites, charactersFavorites} = useContext(GlobalContext);

    let isFavorite = charactersFavorites?.find((c) => c.id === character.id);

    return(
        <div className="content-center">
            {
                isFavorite
                ? <button className="btn btn-tranparent" onClick={()=> removeCharacterToFavorites(character)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg></button>
                : <button className="btn btn-tranparent" onClick={()=> addCharacterToFavorites(character)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg></button>
            }
        </div>
    );
}

export default CharacterFavoriteButton;