import React from "react";
import {useRouter} from "next/router";
import {useLayoutStyles} from "../../styles";
import {SIDE_NAV_ITEMS} from "../../configuration";
import {Drawer, List, SwipeableDrawer, useMediaQuery, useTheme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import clsx from "clsx";
import {SideNavTextItem} from "./SideNavTextItem";
import {SideNavNestedItem} from "./SideNavNestedItem";
import {SideNavSpacer} from "./SideNavSpacer";

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: theme.drawerWidth
    },
    mobileDrawer: {
        width: '100%',
    },
}), {  name: "sideNavStyles"});


export const SideNav = (
    {
        sideNavItems,
        footerItems,
        sideNavOpen = false,
        handleSideNavOpenClick,
    }
) => {
    const classes = useStyles();
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const layoutClasses = useLayoutStyles();

    const renderSideNavList = (items) => {
        return (
            <List dense disablePadding>
                {items.map(function(item){
                    if(item.itemStyle === SIDE_NAV_ITEMS.text) {
                        return <SideNavTextItem key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.nested) {
                        return <SideNavNestedItem key={item.id} item={item}/>
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.spacer) {
                        return <SideNavSpacer key={item.id} item={item}/>
                    }
                })}
            </List>
        )
    }

    if(mdDown) {
        return (
            <SwipeableDrawer
                PaperProps={{ elevation: 0}}
                open={sideNavOpen}
                onOpen={() => handleSideNavOpenClick(true)}
                onClose={() => handleSideNavOpenClick(false)}
                // classes={{
                //     paper: classes.mobileDrawer,
                // }}
                // className={clsx(sideNavOpen? layoutClasses.contentShiftRight : layoutClasses.contentShiftLeft)}
                style={{zIndex: theme.zIndex.appBar - 1}}
            >
                <div>
                    {sideNavItems !== undefined && sideNavItems !== null && renderSideNavList(sideNavItems)}
                </div>
                <div>
                    {footerItems !== undefined && footerItems !== null && renderSideNavList(footerItems)}
                </div>
            </SwipeableDrawer>
        )
    }

    return (
        <Drawer
            variant={"persistent"}
            PaperProps={{ elevation: 0}}
            open={true}
            style={{zIndex: theme.zIndex.appBar - 1}}
        >
            <div>
                {sideNavItems !== undefined && sideNavItems !== null && renderSideNavList(sideNavItems)}
            </div>
        </Drawer>
    )
}