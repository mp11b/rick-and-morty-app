import React, {useState} from 'react';
import CharacterModal from '../Modals/CharacterModal';
import CharacterCard from './CharacterCard';

function Characters({characters = []}) {

    let [character, setCharacter] = useState({});
    let [origin, setOrigin] = useState('');
    let [location, setLocation] = useState('');

    function getCharacterData(character, location, origin) {
        setCharacter(character)
        setLocation(location);
        setOrigin(origin);
    }

    return(
        <div className="row">
            {characters.map((character, index) => (
                <CharacterCard character={character} index={index} getCharacterData={getCharacterData}/>
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