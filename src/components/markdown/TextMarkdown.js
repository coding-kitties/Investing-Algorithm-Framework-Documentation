import React from 'react';
import {Typography} from "@mui/material";

const TextMarkdownRenderer = props => {

    return (
        <Typography variant={"body1"}>
            {props.children}
        </Typography>
    );
}

export default TextMarkdownRenderer;

