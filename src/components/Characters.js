import React, {useState} from 'react';
import CharacterModal from './/Modals/CharacterModal';

function Characters({characters = []}) {

    let [character, setCharacter] = useState({});
    let [origin, setOrigin] = useState('');
    let [location, setLocation] = useState('');

    function getCharacterData(character, location, origin) {
        setCharacter(character);
        setLocation(location);
        setOrigin(origin);
    }

    return(
        <div className="row">
            {characters.map((character, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" 
                    style={{minWidth:"300px"}} 
                    data-bs-toggle="modal" 
                    data-bs-target="#characterModal" 
                    onClick={() => getCharacterData(character, character.location.name, character.origin.name)}>
                        <img src={character.image}/>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                        </div>
                    </div>
                </div>
            ))}
            <CharacterModal
            character={character}
            origin={origin}
            location={location}     
            />
        </div>
    );
}

export default Characters;