import React from "react";
import {useRouter} from "next/router";
import {ListItem, ListItemText, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useDispatch, useSelector} from "react-redux";
import clsx from "clsx";
import {sideNavOpenAction, sideNavValueAction} from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
    active: {
        backgroundColor: "#ecebeb",
    }
}), {name: "jeig"});

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
        dispatch(sideNavOpenAction(false));
        router.push(item.href);
    }

    return (
        <ListItem button onClick={handleClick} style={{backgroundColor: isActive(item) && "#ecebeb"}}>
            <ListItemText disableTypography>
                <Typography align={"left"} variant={"body1"} color={"text.secondary"}>
                    {item.label}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}