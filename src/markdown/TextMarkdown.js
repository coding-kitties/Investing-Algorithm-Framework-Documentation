import React from 'react';
import Typography from "@material-ui/core/Typography";
import {useTypographyStyles} from "../styles";

const TextMarkdownRenderer = props => {
    const typographyClasses = useTypographyStyles();

    console.log(props)
    return (
        <Typography className={typographyClasses.body}>
            {props.children}
        </Typography>
    );
}

export default TextMarkdownRenderer;

