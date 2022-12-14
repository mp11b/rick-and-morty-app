import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

function EpisodeFavoriteButton({episode}) {

    const {addEpisodeToFavorites, removeEpisodeToFavorites, episodesFavorites} = useContext(GlobalContext);

    let isFavorite = episodesFavorites?.find((c) => c.id === episode.id);

    return(
        <div className="content-center">
            {
                isFavorite
                ? <button className="btn btn-transparent mb-1" onClick={()=> removeEpisodeToFavorites(episode)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg></button>
                : <button className="btn btn-transparent mb-1" onClick={()=> addEpisodeToFavorites(episode)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-heart-fill" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg></button>
            }
        </div>
    );
}

export default EpisodeFavoriteButton;