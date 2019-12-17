import React from 'react';
import { Drawer } from "@blueprintjs/core";

export default function CharacterDetails(props) {
  const character = props.character;
  const location = character.location;
  const origin = character.origin;

  return (
    <Drawer
      icon="info-sign"
      onClose={props.handleDetailsToggle}
      title={character.name}
      autoFocus={true}
      canEscapeKeyClose={true}
      canOusideClickClose={true}
      enforceFocus={true}
      hasBackdrop={true}
      isOpen={props.detailsToggle}>
        
      <div className="character-details-container">

        <img src={character.image} alt={character.name} />

        <table className="bp3-html-table">
          <thead>
            <tr>
              <td><h3>Basic Information</h3></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Status</th>
              <td>{character.status}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{character.gender}</td>
            </tr>
            <tr>
              <th>Species</th>
              <td>{character.species}</td>
            </tr>
            {(character.type !== "") && <tr>
              <th>Type</th>
              <td>{character.type}</td>
            </tr>}
            <tr>
              <th>Location</th>
              <td>{location.name}</td>
            </tr>
            <tr>
              <th>Origin</th>
              <td>{origin.name}</td>
            </tr>
          </tbody>
        </table>
      </div>


    </Drawer>
  );
}
