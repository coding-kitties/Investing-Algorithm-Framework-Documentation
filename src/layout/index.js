import React, {useEffect} from 'react';
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import {useRouter} from "next/router";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Collapse from '@material-ui/core/Collapse';
import HeaderContent from "./HeaderContent";
import SideNavContent from "./SideNavContent";
import theme from "../theme";
import Footer from "./Footer";
import SubHeaderContent from "./SubHeaderContent";

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 2,
    },
    appBarSecond: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.primary.light
    },
    appBarSpacer: theme.mixins.toolbar,
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        justify: "center",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        marginLeft: theme.drawerWidth,
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const Layout = props => {
    const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const router = useRouter();
    const {pathname} = router;
    const {children} = props;
    const classes = useStyles();
    const [headerColor, setHeaderColor] = React.useState('transparent');
    const [drawerWidth, setDrawerWidth] = React.useState(0);
    const [scrolled, setScrolled] = React.useState(false);

    useEffect(() => {
        if (pathname.includes('/documentation/') || pathname.includes('/development')) {
            setHeaderColor('default');
        } else {
            setHeaderColor('transparent');
        }
    }, [pathname]);

    useEffect(() => {
        if (pathname.includes('/documentation/') || pathname.includes('/development')) {
            setDrawerWidth(drawerWidth);
        } else {
            setDrawerWidth(0);
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onscroll = function() {

            if (pathname.includes('/documentation/') || pathname.includes('/development')) {
                setHeaderColor('default');

                if (window.pageYOffset === 0) {
                    setScrolled(false);
                } else {
                    setScrolled(true);
                }
            } else {
                if (window.pageYOffset === 0) {
                    setHeaderColor('transparent');
                } else {
                    setHeaderColor('default');
                }
            }
        }
    }, [pathname]);

    const showSubHeader = () => {
        if(pathname === undefined) {
            return false
        }
        return !(!pathname.includes('/documentation/') && !pathname.includes('/development'));
    }

    const showDrawer = () => {
            if(pathname === undefined) {
                return false
            }
            return pathname.includes('/documentation/') || pathname.includes('/development');
    }

    return (
        <>
            <AppBar className={classes.appBar} color={headerColor} elevation={headerColor === "transparent" || showSubHeader() ? 0 : 3} position={"sticky"}>
                <HeaderContent/>
            </AppBar>
            {showSubHeader() &&
                <Toolbar className={classes.appBarSecond}>
                    <SubHeaderContent/>
                </Toolbar>
            }
            {showDrawer() &&
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Collapse in={!scrolled}>
                        <Toolbar />
                        <Toolbar />
                    </Collapse>
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <SideNavContent/>
                    </div>
                </Drawer>
            }
            <main className={clsx(showDrawer() && classes.contentShift)}>
                {children}
            </main>
            {/*<main className={clsx(showDrawer() && classes.contentShift)}>*/}
            {/*    <Container className={classes.container}>*/}
            {/*        {children}*/}
            {/*    </Container>*/}
            {/*</main>*/}
            <Footer drawerOpen={showDrawer()}/>
        </>
    );
};

// hide-end
export default Layout;