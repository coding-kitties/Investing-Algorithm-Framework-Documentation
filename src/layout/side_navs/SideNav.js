import React from "react";
import {SIDE_NAV_ITEMS} from "../../configuration";
import {Drawer, IconButton, List, Stack, SwipeableDrawer, Typography, useMediaQuery} from "@mui/material";
import {SideNavTextItem} from "./SideNavTextItem";
import {SideNavNestedItem} from "./SideNavNestedItem";
import {SideNavSpacer} from "./SideNavSpacer";
import {useTheme} from "@mui/styles";
import CloseIcon from '@mui/icons-material/Close';
import {SideNavHeaderItem} from "./SideNavHeader";

export const SideNav = (
    {
        sideNavItems,
        footerItems,
        sideNavOpen = false,
        handleSideNavOpenClick,
    }
) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

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
                    } else if(item.itemStyle === SIDE_NAV_ITEMS.header) {
                        return <SideNavHeaderItem key={item.id} item={item}/>
                    }
                })}
            </List>
        )
    }

    if(mdDown) {
        return (
            <SwipeableDrawer
                PaperProps={{ elevation: 0, style: {width: "100%"}}}
                open={sideNavOpen}
                onOpen={() => handleSideNavOpenClick(true)}
                onClose={() => handleSideNavOpenClick(false)}
                style={{zIndex: theme.zIndex.appBar + 1, width: "100%"}}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    style={{marginTop: theme.spacing(2), marginBottom: theme.spacing(2)}}
                >
                    <Typography variant={"h4"} style={{marginLeft: theme.spacing(2)}}>
                        Investing Algorithm Framework
                    </Typography>
                    <IconButton style={{marginRight: theme.spacing(1)}} onClick={() => handleSideNavOpenClick(false)}>
                        <CloseIcon/>
                    </IconButton>
                </Stack>
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
            PaperProps={{ elevation: 0, style: {overflow: "hidden", overflowX: "hidden"}}}
            open={sideNavOpen}
            style={{zIndex: theme.zIndex.appBar - 1, overflowX: "hidden", overflow: "hidden"}}
        >
            <div>
                {sideNavItems !== undefined && sideNavItems !== null && renderSideNavList(sideNavItems)}
            </div>
        </Drawer>
    )
}