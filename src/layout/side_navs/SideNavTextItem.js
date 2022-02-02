import React from "react";
import {useRouter} from "next/router";
import {ListItem, ListItemText, Typography} from "@mui/material";

export const SideNavTextItem = ({item}) => {
    const router = useRouter();

    return (
        <ListItem button onClick={() => router.push(item.href)}>
            <ListItemText disableTypography>
                <Typography align={"left"} variant={"body1"} color={"text.secondary"}>
                    {item.label}
                </Typography>
            </ListItemText>
        </ListItem>
    )
}