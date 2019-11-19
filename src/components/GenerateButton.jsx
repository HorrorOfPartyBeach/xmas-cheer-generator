import React from 'react';
import {Fab} from '@material-ui/core';

export default function GenerateButton(props) {
        return (
            <Fab id="making-christmas" onClick={props.onClick} variant="extended" aria-label="Generate random Christmas image">
                <span className="iconify" data-icon="mdi-snowflake" data-inline="false"></span>
                    Sprinkle Christmas Cheer!
                <span className="iconify" data-icon="mdi-snowflake" data-inline="false"></span>
            </Fab>
        )
}