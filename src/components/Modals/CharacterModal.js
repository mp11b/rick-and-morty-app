import React from 'react';

function CharacterModal({character, origin, location}) {

    return(
        <div className="modal fade" id="characterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{character.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <div className="card" style={{width: "100%"}}>
                            <img className ="rounded" src={character.image} alt={character}/>
                            <ul className="list-group list-group-flush mt-3">
                                <li className="list-group-item">{`Gender: ${character.gender}`}</li>
                                <li className="list-group-item">{`Species: ${character.species}`}</li>
                                <li className="list-group-item">{`Status: ${character.status}`}</li>
                                <li className="list-group-item">{`Origin: ${origin}`}</li>
                                <li className="list-group-item">{`Location: ${location}`}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterModal;