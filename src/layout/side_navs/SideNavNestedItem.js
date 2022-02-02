import React, {useState} from "react";
import clsx from "clsx";
import {useRouter} from "next/router";
import {Collapse, List, ListItem, ListItemText, Typography} from "@mui/material";
import {ChevronRight, ExpandLess} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";

export const SideNavNestedItem = ({item}) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const sideNavValue = useSelector(state => state.layout.sideNavValue);

    const isActive = (refItem) => {
        return refItem.id === sideNavValue;
    }

    const rootActive = () => {
        if(item.id && sideNavValue) {
            return sideNavValue.includes(item.id)
        }

        return false;
    }

    const handleClick = (item) => {router.push(item.href)}

    return (
        <>
            <ListItem
                className={
                    clsx(
                        sideNavClasses.sideNavListItem,
                        !open && rootActive() && sideNavClasses.sideNavListItemNestedActive
                    )
                }
                button
                onClick={() => setOpen(!open)}
            >
                <ListItemText disableTypography>
                    <Typography variant={"body1"}>
                        {item.label}
                    </Typography>
                </ListItemText>
                {open ? <ExpandLess /> : <ChevronRight />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {item.children.map((childItem, index) =>
                        <ListItem
                            onClick={() => handleClick(childItem)}
                            key={index}
                            button
                            className={clsx(sideNavClasses.sideNavListItemNested, isActive(childItem) && sideNavClasses.sideNavListItemNestedActive)}
                        >
                            <ListItemText disableTypography>
                                <Typography>
                                    {childItem.label}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    )}
                </List>
            </Collapse>
        </>
    )
}