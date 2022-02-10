import {AppBar, Box, Container} from "@mui/material";
import clsx from "clsx";
import React from "react";
import {useLayoutStyles} from "../../styles";
import {HeaderContent} from "./HeaderContent";
import {SideNav} from "../side_navs";
import {useRouter} from "next/router";
import {SIDE_NAV_ITEMS} from "../../configuration";

export const DefaultLayout = ({children}) => {
    const layoutClasses = useLayoutStyles();
    const router = useRouter();

    const getSideNavOpen = () => {
        return router.pathname.includes("documentation");
    }

    const getSideNavItems = () => {
        let items = [];

        items = items.concat(
            [
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
                {
                    id: 'reference-documentation',
                    label: 'Reference documentation',
                    itemStyle: SIDE_NAV_ITEMS.nested,
                    children: [
                        {
                            id: 'brokers',
                            label: 'Brokers',
                            href: '/python-client/introduction',
                        },
                        {
                            id: 'plugins',
                            label: 'Plugins',
                            href: '/python-client/orders',
                        },
                        {
                            id: 'Deploy and manage your algorithm',
                            label: 'Strategy',
                            href: '/python-client/orders',
                        },
                        {
                            id: 'integrations',
                            label: 'Integrations',
                        },
                    ]
                },
            ]
        )

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
            {getSideNavOpen() && <SideNav sideNavItems={getSideNavItems()}/>}
            <main className={clsx(layoutClasses.content, getSideNavOpen() && layoutClasses.contentShiftLeft)}>
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