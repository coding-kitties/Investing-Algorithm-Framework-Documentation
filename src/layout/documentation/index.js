import React from 'react';
import {AppBar, Box, Container, useMediaQuery, useTheme} from "@mui/material";
import clsx from "clsx";
import {SIDE_NAV_ITEMS} from "../../configuration";
// import {sideNavOpenAction} from "../../redux/actions";
import {useLayoutStyles} from "../../styles";
import {HeaderContent} from "./HeaderContent";
import {SideNav} from "../side_navs";


export const DocsLayout = ({children}) => {
    const layoutClasses = useLayoutStyles();
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.only("md"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    // const sideNavOpen = useSelector(state => state.layout.sideNavOpen);

    const getAppLogoLabel = () => {

        if(md) {
            return "Docs"
        }

        return "Documentation";
    }

    const getSideNavOpen = () => {

        if(mdDown) {
            return sideNavOpen;
        }

        return true;
    }

    const getSideNavItems = () => {
        let items = [];

        items = items.concat(
            [
                {
                    id: 'getting-started',
                    label: 'Getting started',
                    itemStyle: SIDE_NAV_ITEMS.nested,
                    children: [
                        {
                            id: 'introduction',
                            label: 'Introduction',
                            href: '/get-started/introduction',
                        },
                    ]
                },
                {
                    id: 'python-client',
                    label: 'Python client',
                    itemStyle: SIDE_NAV_ITEMS.nested,
                    children: [
                        {
                            id: 'python-client-introduction',
                            label: 'Introduction',
                            href: '/python-client/introduction',
                        },
                        {
                            id: 'python-client-orders',
                            label: 'Orders',
                            href: '/python-client/orders',
                        },
                        {
                            id: 'python-client-positions',
                            label: 'Positions',
                            href: '/python-client/positions',
                        },
                        {
                            id: 'python-client-portfolio',
                            label: 'Portfolio',
                            href: '/python-client/portfolio',
                        },
                    ]
                },
                {
                    id: 'investing-algorithm-framework-plugin',
                    label: 'Investing Algorithm Framework plugin',
                    itemStyle: SIDE_NAV_ITEMS.nested,
                    children: [
                        {
                            id: 'investing-algorithm-framework-plugin-introduction',
                            label: 'Introduction',
                            href: '/investing-algorithm-framework-plugin/introduction',
                        },
                    ]
                },
            ]
        )

        return items;
    }

    const handleSideNavOpenClick = () => {
        // dispatch(sideNavOpenAction(!sideNavOpen));
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <AppBar
                    position={"sticky"}
                    color={"inherit"}
                    elevation={0}
                    style={{borderBottom: "1px solid #e0e3e7"}}
                >
                    <HeaderContent/>
                </AppBar>
                <SideNav
                    sideNavItems={getSideNavItems()}
                    handleSideNavOpenClick={handleSideNavOpenClick}
                    appLogoLabel={getAppLogoLabel()}
                />
                <main className={clsx(layoutClasses.content, getSideNavOpen() && layoutClasses.contentShiftLeft)}>
                    {children}
                </main>
                <Box
                    className={clsx(layoutClasses.content, getSideNavOpen() && layoutClasses.contentShiftLeft)}
                    component="footer"
                    sx={{
                        justifyContent: 'center',
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? "#ffffff"
                                : theme.palette.grey[800],
                    }}
                >
                    <Container>
                        {/*<Footer/>*/}
                    </Container>
                </Box>
            </Box>
        </>
    );
};
