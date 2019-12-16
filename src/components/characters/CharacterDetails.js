import React from 'react';
import { Button } from "@blueprintjs/core";

export default function CharacterDetails() {
  return (
    <div className="character-details">
        <header>
            <h3 className="bp3-heading">Title</h3>
            <Button intent="danger">X</Button>
        </header>
    </div>
  );
}
