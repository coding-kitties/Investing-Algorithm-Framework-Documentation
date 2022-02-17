import React from "react";
import {ListItem, ListItemText, Typography} from "@mui/material";


export const SideNavHeaderItem = ({item}) => {
    return (
        <ListItem>
            <ListItemText disableTypography>
                <Typography align={"left"} variant={"subtitle2"} color={"text.secondary"} fontWeight={700}>
                    {item.label}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}