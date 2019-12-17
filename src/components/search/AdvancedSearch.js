import React, {useState} from 'react';
import { Button } from '@blueprintjs/core'

export default function AdvancedSearch() {
    const [queryObject, setQueryObject]=useState({
        name:"",
        location:"",
        gender:"",
        status:"",
        species:""
    })

    const handleSubmit = () => {

    }

    return (
        <div className="search-container">
            <h1>Advanced Search</h1>
            <br/>
            <div className="search-filters">
                <table className="search-filters-table">
                    <tbody align="center">
                        <tr>
                            <td>Name</td>
                            <td>Name</td>
                            <td>Location</td>
                        </tr>
                        <tr>
                            <td><input className="bp3-input bp3-round" type="text" placeholder="Text input" dir="auto" /></td>
                            <td><input className="bp3-input bp3-round" type="text" placeholder="Text input" dir="auto" /></td>
                            <td><input className="bp3-input bp3-round" type="text" placeholder="Text input" dir="auto" /></td>
                        </tr>
                    </tbody>
                    <br/>
                    <tbody>
                        <tr>
                            <td>Status</td>
                            <td>Gender</td>
                        </tr>
                        <tr>
                            <td><div className="bp3-select">
                                <select>
                                    <option selected>Choose status...</option>
                                    <option value="Alive">Alive</option>
                                    <option value="Dead">Dead</option>
                                    <option value="unknown">unknown</option>
                                </select>
                            </div></td>
                            <td><div className="bp3-select">
                                <select>
                                    <option selected>Choose gender...</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Genderless">Genderless</option>
                                    <option value="unknown">unknown</option>
                                </select>
                            </div></td>
                        </tr>
                    </tbody>
                </table>
                <Button intent="primary" onClick={() => console.log("pressed")}>Search</Button>
            </div>
        </div >
    );
}
