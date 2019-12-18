import React, { useState } from 'react';
import { Button } from '@blueprintjs/core'
import CharactersContainer from '../characters/CharactersContainer';

export default function AdvancedSearch() {
    const [queryObject, setQueryObject] = useState({
        name: "",
        type: "",
        gender: "",
        status: "",
        species: ""
    })

    const [queryString, setQueryString] = useState("")
    const [searchToggle, setSearchToggle] = useState(false)

    const handleSubmit = (e) => {
        setSearchToggle(false);
        e.preventDefault();
        setSearchToggle(true);
        Object.keys(queryObject).forEach((key) => (queryObject[key] === "") && delete queryObject[key]);
        const str = "?" + new URLSearchParams(queryObject)
        setQueryString(str);
    }

    const handleChange = (event) => {
        setQueryObject({
            ...queryObject,
            [event.target.id]: event.target.value
        })
    }

    return (
        <div>
            <div className="search-container">
                <h1>Advanced Search</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="search-filters">
                        <table className="search-filters-table">
                            <tbody align="center">
                                <tr>
                                    <td>Name</td>
                                    <td>Species</td>
                                    <td>Type</td>
                                </tr>
                                <tr>
                                    <td><input id="name" value={queryObject.name} onChange={handleChange} className="bp3-input bp3-round" type="text" placeholder="Text input" dir="auto" /></td>
                                    <td><input id="species" value={queryObject.species} onChange={handleChange} className="bp3-input bp3-round" type="text" placeholder="Text input" dir="auto" /></td>
                                    <td><input id="type" value={queryObject.type} onChange={handleChange} className="bp3-input bp3-round" type="text" placeholder="Text input" dir="auto" /></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Status</td>
                                    <td>Gender</td>
                                </tr>
                                <tr>
                                    <td><div className="bp3-select">
                                        <select id="status" onChange={handleChange}>
                                            <option value="">Choose status...</option>
                                            <option value="Alive">Alive</option>
                                            <option value="Dead">Dead</option>
                                            <option value="unknown">unknown</option>
                                        </select>
                                    </div></td>
                                    <td><div className="bp3-select">
                                        <select id="gender" onChange={handleChange}>
                                            <option value="">Choose gender...</option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                            <option value="Genderless">Genderless</option>
                                            <option value="unknown">unknown</option>
                                        </select>
                                    </div></td>
                                </tr>
                            </tbody>
                        </table>
                        <Button type="submit" intent="primary" >Search</Button>
                    </div>
                </form>
            </div >
            {searchToggle &&
                <CharactersContainer query={queryString} search=""/>
            }
        </div>
    );
}
