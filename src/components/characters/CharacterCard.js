import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";

export default function CharacterCard(props) {
    return (
        <Card className="card-component" interactive={true} elevation={Elevation.THREE}>
            <h3 className="bp3-heading card-title">{props.name}</h3>
            <hr width="100%" />
            <img src={props.imgSrc} alt={props.name} />
            <Button intent="success" onClick={() => props.onClick(props.id)}>More details</Button>
        </Card>
    );
}
