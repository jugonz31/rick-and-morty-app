import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import Sidebar from "react-sidebar";


import axios from 'axios';
import CharacterDetails from './CharacterDetails';

export default function CharactersContainer() {
    const [characters, setCharacters] = useState([]);
    const [actualPage, setPage] = useState(1);
    const [detailsToggle, setDetailsToggle] = useState(false)
    const [reloader] = useState(0);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(res => setCharacters(res.data.results));
    }, [reloader])

    const getCharacters = async () => {
        const res = await axios.get("https://rickandmortyapi.com/api/character/?page=" + actualPage);
        return res.data.results;
    }
    const handlePageClick = (e) => {
        console.log(e);
    }

    const handleDetailsToggle = () => {
        setDetailsToggle(!detailsToggle);
    }

    const charactersCards = characters.map((c) => {
        return (
            <CharacterCard
                imgSrc={c.image}
                id={c.id}
                name={c.name}
                onClick={handleDetailsToggle}
                key={c.id}
            />
        )
    })



    return (
        <div>
            <Sidebar
                sidebar={<CharacterDetails/>}
                open={detailsToggle}
                onSetOpen={handleDetailsToggle}
                styles={{ sidebar: { background: "white", zIndex: 10, position:"fixed", width:"50%"} }}
            >
               
            </Sidebar>

            <div className="container">
                {charactersCards}
                <Pagination className="pagination" defaultCurrent={1} onClick={handlePageClick} total={250} />
            </div>

        </div>
    );
}
