import React, {useState} from 'react';
import EpisodeModal from '../Modals/EpisodeModal'

function ListEpisodes({episodes = []}) {

    const [episode, setEpisode] = useState({});

    return(
        <div className="episodes">
            <ul className="list-group">
                {episodes.map((episode, index) => (
                    <a 
                    type="button" 
                    className="list-group-item list-group-item-action" 
                    data-bs-toggle="modal" 
                    data-bs-target="#episodeModal" 
                    key={index} 
                    onClick={() => setEpisode(episode)}>
                        {`Episode ${episode.id}: ${episode.name}`}
                    </a> 
                ))}
            </ul>
            <EpisodeModal
            id={episode.id}
            name={episode.name}
            airDate={episode.air_date}
            characters={episode.characters}     
            />
        </div>
    );
}

export default ListEpisodes;