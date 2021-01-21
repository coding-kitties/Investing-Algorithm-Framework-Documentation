import React, {PureComponent} from 'react';
import Alert from '@material-ui/lab/Alert';
import Typography from "@material-ui/core/Typography";
import {useTypographyStyles} from "../styles";

const HeaderMarkdown = props => {
    const typographyClasses = useTypographyStyles();

    return (
        <Typography className={typographyClasses.sectionHeader}>
            {props.children}
        </Typography>
    );
}

export default HeaderMarkdown;

