import React, {useState} from "react";
import clsx from 'clsx';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Link from '../Link'

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
    header: {
        fontSize: 14,
    },
    subItem: {
        fontSize: 12,
    },
    active: {
        color: theme.palette.primary.main
    }
}));


function isActive(location, link) {
    const {pathname} = location;
    return pathname.includes(link);
}

const NestedSideNavItem = props => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const {subItems, header, location} = props;
    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemText classes={{primary:classes.header}}>{header}</ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding component="div">
                    {
                        subItems.map((item, index) => (
                            <ListItem key={index} button className={classes.nested} component={Link} href={item.link}>
                                <Typography
                                    className={
                                        clsx(
                                            classes.subItem,
                                            isActive(location, item.link) && classes.active
                                        )
                                    }
                                >
                                    {item.label}
                                </Typography>
                            </ListItem>
                        ))
                    }
                </List>
            </Collapse>
        </>
    )
}

NestedSideNavItem.propTypes = {
    subItems: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, link: PropTypes.string})),
    header: PropTypes.string
};

export default NestedSideNavItem;