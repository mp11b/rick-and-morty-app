import React, {useState} from 'react';
import EpisodeModal from '../Modals/EpisodeModal'
import EpisodeFavoriteButton from './EpisodeFavoriteButton'

function ListEpisodes({episodes = []}) {

    const [episode, setEpisode] = useState({});

    return(
        <div className="episodes">
            <ul className="list-group">
                {episodes.map((episode, index) => (
                     <li class="list-group-item d-flex justify-content-between align-items-center">
                        <a class="text-decoration-none" href="/link1"
                        data-bs-toggle="modal"
                        data-bs-target="#episodeModal"
                        key={index}
                        onClick={() => setEpisode(episode)}>{`Episode ${episode.id}: ${episode.name}`}</a>
                        <a><EpisodeFavoriteButton episode={episode} /></a>
                    </li>
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