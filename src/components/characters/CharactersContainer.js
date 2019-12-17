import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CharacterCard from './CharacterCard';
import axios from 'axios';

import CharacterDetails from './CharacterDetails';
import { UNSELECT_CHARACTER, SELECT_SAVED_CHARACTER, SELECT_NEW_CHARACTER } from '../../redux/actions/CharacterActions';

export default function CharactersContainer() {
    const [characters, setCharacters] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [detailsToggle, setDetailsToggle] = useState(false)
    const [reloader] = useState(0);

    const selectedCharacter = useSelector(state => state.selectedCharacter);
    const savedCharacters = useSelector(state => state.savedCharacters);
    const dispatcher = useDispatch();

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(res => setCharacters(res.data.results));
    }, [reloader])

    const getCharacters = async () => {
        const res = await axios.get("https://rickandmortyapi.com/api/character/?page=" + activePage);
        return res.data.results;
    }

    const handleDetailsToggle = (id) => {
        detailsToggle ?
            dispatcher({ type: UNSELECT_CHARACTER }) :
            savedCharacters.find(c => c.id === id) === undefined ?
                dispatcher({ type: SELECT_NEW_CHARACTER, payload: { character: characters[(id - 1)] } }) :
                dispatcher({ type: SELECT_SAVED_CHARACTER, payload: { id: id } });
        setDetailsToggle(!detailsToggle);
    }

    const charactersCards = characters.map((c) => {
        return (
            <CharacterCard
                imgSrc={c.image}
                id={c.id}
                name={c.name}
                onClick={(id) => handleDetailsToggle(id)}
                key={c.id}
            />
        )
    })
    
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setActivePage(pageNumber);
      }

    return (
        <div>
            {detailsToggle &&
                <CharacterDetails
                    handleDetailsToggle={handleDetailsToggle}
                    detailsToggle={detailsToggle}
                    character={selectedCharacter}
                />}

            <div className="card-container">
                {charactersCards}
            </div>

        </div>
    );
}
