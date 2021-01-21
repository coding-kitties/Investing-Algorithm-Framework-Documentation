import React from 'react';
import Typography from "@material-ui/core/Typography";
import {useTypographyStyles} from "../styles";

const TextMarkdown = props => {
    const typographyClasses = useTypographyStyles();

    return (
        <Typography className={typographyClasses.body}>
            {props.children}
        </Typography>
    );
}

export default TextMarkdown;

