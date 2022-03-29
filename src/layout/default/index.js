import {AppBar, Box, Container, useMediaQuery} from "@mui/material";
import clsx from "clsx";
import React from "react";
import {useLayoutStyles} from "../../styles";
import {HeaderContent} from "./HeaderContent";
import {SideNav} from "../side_navs";
import {useRouter} from "next/router";
import {SIDE_NAV_ITEMS} from "../../configuration";
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "@mui/styles";
import {sideNavOpenAction} from "../../redux/actions";
import {ActionsErrorEventNotifier, ActionsSuccessEventNotifier} from "../../components/notifications";

export const DefaultLayout = ({children}) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const layoutClasses = useLayoutStyles();
    const router = useRouter();
    const sideNavOpen = useSelector(state => state.layout.sideNavOpen);
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    const getSideNavOpen = () => {

        if(mdDown) {
            return sideNavOpen;
        }

        return router.pathname.includes("documentation");
    }

    const shiftContent = () => {

        if(mdDown) {
            return false;
        }

        return router.pathname.includes("documentation");
    }

    const handleSideNavOpenClick = (value) => {
        dispatch(sideNavOpenAction(value));
    }

    const getSideNavItems = () => {
        let items = [];


        if(!mdDown) {
            items = items.concat([
                {
                    id: 'spacer-one',
                    itemStyle: SIDE_NAV_ITEMS.spacer,
                },
                {
                    id: 'spacer-two',
                    itemStyle: SIDE_NAV_ITEMS.spacer,
                },
                {
                    id: 'spacer-three',
                    itemStyle: SIDE_NAV_ITEMS.spacer,
                },
            ])
        }

        if(router.pathname.includes("documentation")) {
            items = items.concat(
                [
                    {
                        id: 'getting-started',
                        label: 'Getting started',
                        itemStyle: SIDE_NAV_ITEMS.text,
                        href: '/documentation/getting-started',

                    },
                    {
                        id: 'first-steps-and-tutorials',
                        label: 'First steps and tutorials',
                        itemStyle: SIDE_NAV_ITEMS.nested,
                        children: [
                            {
                                id: 'overview',
                                label: 'Introductory overview',
                                href: '/documentation/tutorials/overview',
                            },
                            {
                                id: 'quickstart',
                                label: 'Quick start',
                                href: '/documentation/tutorials/quickstart',
                            },
                            {
                                id: 'concepts',
                                label: 'Important concepts',
                                href: '/documentation/tutorials/concepts',
                            },
                            {
                                id: 'management-commands',
                                label: 'Management commands',
                                href: '/documentation/tutorials/management-commands',
                            },
                            {
                                id: 'creating-orders',
                                label: 'Creating orders',
                                href: '/documentation/tutorials/creating-orders',
                            },
                            {
                                id: 'using-the-portfolio-model',
                                label: 'Using the portfolio model',
                                href: '/documentation/tutorials/using-the-portfolio-model',
                            },
                            {
                                id: 'deployment',
                                label: 'Deployment',
                                href: '/documentation/tutorials/deployment',
                            },
                        ]
                   },
                    {
                        id: 'guides',
                        label: 'Guides',
                        itemStyle: SIDE_NAV_ITEMS.nested,
                        children: [
                            {
                                id: 'models',
                                label: 'Models',
                                href: '/documentation/guides/models',
                            },
                            {
                                id: 'strategies',
                                label: 'Strategies',
                                href: '/documentation/guides/strategies',
                            },
                            {
                                id: 'data-providers',
                                label: 'Data providers',
                                href: '/documentation/guides/data-providers',
                            },
                            {
                                id: 'order-executors',
                                label: 'Order executors',
                                href: '/documentation/guides/order-executors',
                            },
                            {
                                id: 'portfolio-managers',
                                label: 'Portfolio managers',
                                href: '/documentation/guides/portfolio-managers',
                            },
                            {
                                id: 'binance',
                                label: 'Connecting to Binance',
                                href: '/documentation/guides/binance',
                            },
                            {
                                id: 'eltyer',
                                label: 'Connecting to ELTYER',
                                href: '/documentation/guides/eltyer',
                            },
                        ]
                    },
                ]
            )
        }

        if(mdDown) {
            items = items.concat([
                {
                    id: 'spacer_one',
                    itemStyle: SIDE_NAV_ITEMS.spacer,
                },
                {
                    id: 'navigation_header',
                    itemStyle: SIDE_NAV_ITEMS.header,
                    label: 'Navigation',
                },
                {
                    id: 'about',
                    label: 'About the framework',
                    itemStyle: SIDE_NAV_ITEMS.text,
                    href: '/',

                },
                {
                    id: 'documentation',
                    label: 'Documentation',
                    itemStyle: SIDE_NAV_ITEMS.text,
                    href: '/documentation/getting-started',

                },
                {
                    id: 'license',
                    label: 'License',
                    itemStyle: SIDE_NAV_ITEMS.text,
                    href: '/license',

                },
                {
                    id: 'support',
                    label: 'Support',
                    itemStyle: SIDE_NAV_ITEMS.text,
                    href: '/support',

                }
            ]);
        }

        return items;
    }


    return (
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
            <SideNav sideNavItems={getSideNavItems()} sideNavOpen={getSideNavOpen()} handleSideNavOpenClick={handleSideNavOpenClick}/>
            <main className={clsx(layoutClasses.content, shiftContent() && layoutClasses.contentShiftLeft)}>
                <ActionsErrorEventNotifier/>
                <ActionsSuccessEventNotifier/>
                {children}
            </main>
            <Box
                className={clsx(layoutClasses.content)}
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
    )
}