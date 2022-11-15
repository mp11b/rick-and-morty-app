import React, {useState} from 'react';

function CharacterModal({character, origin, location}) {

    return( 
        <div className="modal fade" id="characterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{character.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <img src={character.image} alt={character}/>
                        <p>{`Gender: ${character.gender}`}</p>
                        <p>{`Species: ${character.species}`}</p>
                        <p>{`Status: ${character.status}`}</p>
                        <p>{`Origin: ${origin}`}</p>
                        <p>{`Location: ${location}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterModal;