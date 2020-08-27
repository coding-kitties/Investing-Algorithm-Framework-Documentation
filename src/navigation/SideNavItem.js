import React from "react";
import clsx from 'clsx';
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import Link from '../Link'

const useStyles = makeStyles((theme) => ({
    listItem: {
        fontSize: 14
    },
    active: {
        color: theme.palette.primary.main
    }
}));

function isActive(location, link) {
    const {pathname} = location;
    return pathname.includes(link);
}

const SideNavItem = props => {
    const classes = useStyles();
    const {label, link, location} = props;

    return (
        <ListItem button className={classes.nested} component={Link} href={link}>
            <Typography className={clsx(classes.listItem, isActive(location, link) && classes.active)}>{label}</Typography>
        </ListItem>
    )
}

SideNavItem.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string
};

export default SideNavItem;