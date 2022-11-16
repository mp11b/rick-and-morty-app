import React from 'react';
import CharacterFavoriteButton from './CharacterFavoriteButton';

function CharacterCard({character, index, getCharacterData}){
 
    return(
        <div className="col mb-4" key={index}>
            <div className="card border border-gray border-3" 
            style={{minWidth:"100px"}}>
                <img src={character.image} 
                data-bs-toggle="modal" 
                data-bs-target="#characterModal" 
                onClick={() => getCharacterData(character, character.location.name, character.origin.name)}/>
                <div className="card-body">
                    <div className="row">
                        <div className="col-9 mt-1"><h5 className="card-title">{character.name}</h5></div>
                        <div className="col-3"><CharacterFavoriteButton character={character}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;