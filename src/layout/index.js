import React from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router";
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Root,
    getHeader,
    getSubheader,
    getDrawerSidebar,
    getSidebarContent,
    getContent,
    getSidebarTrigger,
    getFooter,
    getStandardScheme,
} from '@mui-treasury/layout';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SubHeaderContent from "./SubHeaderContent";
import HeaderContent from "./HeaderContent";
import SideNavContent from "./SideNavContent";
import theme from "../theme";
import FooterContent from "./FooterContent";

const Header = getHeader(styled);
const Subheader = getSubheader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);
const standardScheme = getStandardScheme();
const SidebarTrigger = getSidebarTrigger(styled);


standardScheme.configureHeader(builder => {
    builder
        .create("main_header")
        .registerConfig("xs", {
            position: "fixed",
            clipped: true,
            layer: 2,
        });
});

standardScheme.configureSubheader(builder => {
    builder.create('subheader_2').registerConfig('xs', {
        position: 'relative',
        initialHeight: 110,
        clipped: {
            primarySidebar: true,
            tertiary: true,
        },
    });
});

standardScheme.configureInsetSidebar(builder => {
    builder
        .create('insetSidebar', { anchor: 'right' })
        .registerFixedConfig('sm', {
            width: 30,
            height: 100
        });
});

const Layout = props => {
    const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const router = useRouter();
    const {pathname} = router;
    const {children} = props;

    standardScheme.configureEdgeSidebar(builder => {
        builder
            .create("primarySidebar", {anchor: "left"})
            .registerTemporaryConfig('xs', {
                width: 256,
            })
            .registerTemporaryConfig('sm', {
                width: 256,
            })
            .registerTemporaryConfig('md', {
                width: 256,
            })
            .registerPermanentConfig('lg', {
                headerMagnetEnabled: true,
                width: 256,
                collapsible: false,
            });
        if (!pathname.includes('/documentation') && !pathname.includes('/development')) {
            builder.hide("primarySidebar", true);
        } else {
            builder.hide("primarySidebar", false);
        }
    });

    const showSubHeader = () => {
        if(pathname === undefined) {
            return false
        }

        return !(!pathname.includes('/documentation/') && !pathname.includes('/development'));
    }

    return (
        <Root scheme={standardScheme} theme={theme}>
            <CssBaseline />
            <Header color={'default'}>
                <Toolbar>
                    {matchesMdDown && <SidebarTrigger sidebarId="primarySidebar" />}
                    <HeaderContent />
                </Toolbar>
            </Header>
            {showSubHeader() &&
                <Subheader subheaderId={'subheader_2'}>
                    <SubHeaderContent/>
                </Subheader>
            }
            <DrawerSidebar sidebarId={'primarySidebar'}>
                <SidebarContent>
                    <SideNavContent />
                </SidebarContent>
            </DrawerSidebar>
            <Content>
                {children}
            </Content>
            <Footer>
                <FooterContent />
            </Footer>
        </Root>
    );
};

// hide-end
export default Layout;