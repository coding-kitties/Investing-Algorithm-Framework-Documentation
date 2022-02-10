import React, {useState} from "react";
import clsx from "clsx";
import {useRouter} from "next/router";
import {Collapse, List, ListItem, ListItemText, Typography} from "@mui/material";
import {ChevronRight, ExpandLess} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {makeStyles, useTheme} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
   active: {
       backgroundColor: "#ecebeb",
   }
}));

export const SideNavNestedItem = ({item}) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const theme = useTheme();
    const classes = useStyles();
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
                className={clsx(rootActive() && classes.active)}
                button
                onClick={() => setOpen(!open)}
                style={{borderLeft: "4px solid", marginLeft: "4px", marginTop: "4px", marginBottom: "4px"}}
            >
                <ListItemText disableTypography>
                    <Typography variant={"body1"} color={"text.secondary"}>
                        {item.label}
                    </Typography>
                </ListItemText>
                {open ? <ExpandLess style={{color: theme.palette.text.secondary}}/> : <ChevronRight style={{color: theme.palette.text.secondary}}/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {item.children.map((childItem, index) =>
                        <ListItem
                            onClick={() => handleClick(childItem)}
                            key={index}
                            button
                            dense
                            style={{backgroundColor: isActive(childItem) && "#ecebeb"}}
                        >
                            <ListItemText disableTypography style={{paddingLeft: "16px"}}>
                                <Typography variant={"caption"} color={"text.secondary"}>
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