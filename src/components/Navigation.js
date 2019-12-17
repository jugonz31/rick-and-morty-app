import React from 'react';
import logo from '../assets/rick-and-morty-logo.png'

export default function Navigation() {
    return (
        <nav className="bp3-navbar bp3-dark navbar">
            <div className="navbar-content">
                <div className="bp3-navbar-group bp3-align-left">
                    <img src={logo} alt="Rick and Morty's logo"height="85%"/>
                </div>
                <div className="bp3-navbar-group bp3-align-right">
                    <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
                    <button className="bp3-button bp3-minimal bp3-icon-user">Characters</button>
                    <button className="bp3-button bp3-minimal bp3-icon-search">Advanced Search</button>
                    <span className="bp3-navbar-divider"></span>
                    <input className="bp3-input navbar-input" placeholder="Search" type="text" />
                </div>
            </div>
        </nav>


    );
}
