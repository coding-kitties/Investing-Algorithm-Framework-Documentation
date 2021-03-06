import React from 'react';
import ReactMarkdown from "react-markdown";
import {Typography} from "@mui/material";

const HeaderMarkdownRenderer = props => {

    switch (props.level) {
        case 1:
            return <Typography variant={"h1"} id={props.children.replace(/\s+/g, '-').toLowerCase()}>{props.children}</Typography>
        case 2:
            return <Typography variant={"h2"} id={props.children.replace(/\s+/g, '-').toLowerCase()}>{props.children}</Typography>
        case 3:
            return <Typography variant={"h3"} id={props.children.replace(/\s+/g, '-').toLowerCase()}>{props.children}</Typography>
        case 4:
            return <Typography variant={"h4"} id={props.children.replace(/\s+/g, '-').toLowerCase()}>{props.children}</Typography>
        case 5:
            return <Typography variant={"h6"} id={props.children.replace(/\s+/g, '-').toLowerCase()}>{props.children}</Typography>
        default:
            const Heading = ReactMarkdown.renderers.Heading
            return <Heading {...props} />
    }
}

export default HeaderMarkdownRenderer;

