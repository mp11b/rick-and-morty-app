import React, {useState} from 'react';
import Characters from '../Characters/Characters';

function EpisodeModal(props) {

    const [characters, setCharacters] = useState([])

    async function getCharactersApi() {
        let characters = await Promise.all(
            props.characters?.map((url) => {
              return fetch(url).then((res) => res.json());
            })
          );

        setCharacters(characters);
    }

    getCharactersApi();

    return( 
        <div className="modal fade" id="episodeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{`Episode ${props.id}: ${props.name}`}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <p>{`Air Date: ${props.airDate}`}</p>
                    </div>
                    <div>
                        <h3 className="text-center mb-5">Characters</h3>
                        <Characters characters = {characters}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EpisodeModal;