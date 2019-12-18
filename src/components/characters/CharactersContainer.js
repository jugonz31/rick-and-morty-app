import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CharacterCard from './CharacterCard';
import InfiniteScroll from 'react-infinite-scroll-component'
import CharacterDetails from './CharacterDetails';
import { UNSELECT_CHARACTER, SELECT_SAVED_CHARACTER, SELECT_NEW_CHARACTER } from '../../redux/actions/CharacterActions';
import { request } from '../../js/api'

export default function CharactersContainer(props) {
    const [characters, setCharacters] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [hasMore, setHasMore] = useState(true)
    const [detailsToggle, setDetailsToggle] = useState(false)

    const selectedCharacter = useSelector(state => state.selectedCharacter);
    const savedCharacters = useSelector(state => state.savedCharacters);
    const dispatcher = useDispatch();
    const api = "https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        const initialRequest = async () => {
            const reqData = await request(api + props.query);
            setCharacters(reqData.response.results);
            setNextPage(reqData.response.info.next);
        }
        initialRequest();
    }, [])

    const getCharacters = async () => {
        const reqData = await request(nextPage);
        if (reqData.response.results !== undefined) {
            setCharacters([...characters, ...reqData.response.results]);
            setNextPage(reqData.response.info.next)
        } else {
            setHasMore(false);
        }
    }

    const handleDetailsToggle = (id) => {
        detailsToggle ?
            dispatcher({ type: UNSELECT_CHARACTER }) :
            savedCharacters.find(c => c.id === id) === undefined ?
                dispatcher({ type: SELECT_NEW_CHARACTER, payload: { character: characters.find(c => c.id === id) } }) :
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

    return (
        <div>
            {detailsToggle &&
                <CharacterDetails
                    handleDetailsToggle={handleDetailsToggle}
                    detailsToggle={detailsToggle}
                    character={selectedCharacter}
                />}

            <div className="card-container">
                <InfiniteScroll
                    dataLength={characters.length}
                    next={getCharacters}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}>
                    {charactersCards}
                </InfiniteScroll>
            </div>
        </div>
    );
}
