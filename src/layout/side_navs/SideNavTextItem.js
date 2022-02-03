import React from "react";
import {useRouter} from "next/router";
import {ListItem, ListItemText, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import clsx from "clsx";
import {sideNavValueAction} from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
    sideNavActiveItem: {
        background: theme.palette.background.light
    }
}));

export const SideNavTextItem = ({item}) => {
    const classes = useStyles();
    const router = useRouter();
    const sideNavValue = useSelector(state => state.layout.sideNavValue);
    const dispatch = useDispatch();

    const isActive = (refItem) => {
        return refItem.id === sideNavValue;
    }

    const handleClick = () => {
        dispatch(sideNavValueAction(item.id));
        router.push(item.href);
    }

    return (
        <ListItem button onClick={handleClick} className={clsx(isActive(item) && classes.sideNavActiveItem)}>
            <ListItemText disableTypography>
                <Typography align={"left"} variant={"body1"} color={"text.secondary"}>
                    {item.label}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}