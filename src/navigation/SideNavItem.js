import React from "react";
import { useRouter } from 'next/router'
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

function isActive(link) {
    const router = useRouter()
    const {pathname} = router;
    return pathname.includes(link);
}

const SideNavItem = props => {
    const classes = useStyles();
    const {label, link} = props;
    const router = useRouter();

    return (
        <ListItem button onClick={() => router.push(link)}>
            <Typography
                color={"textPrimary"}
                className={clsx(classes.listItem, isActive(link) && classes.active)}
            >
                {label}
            </Typography>
        </ListItem>
    )
}

SideNavItem.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string
};

export default SideNavItem;