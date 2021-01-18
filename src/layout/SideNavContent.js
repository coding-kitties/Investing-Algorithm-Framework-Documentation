import React, {useState} from 'react';
import { useRouter } from 'next/router'
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import {ListItemText} from "@material-ui/core";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import Grid from "@material-ui/core/Grid";
import {useSideNavStyles, useTypographyStyles} from "../styles";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import Link from "../Link";

const SideNavContent = () => {
    const typographyClasses = useTypographyStyles();
    const sideNavClasses = useSideNavStyles();
    const router = useRouter()
    const [introductionOpen, setIntroductionOpen] = useState(false);
    const [tutorialsOpen, setTutorialsOpen] = useState(false);
    const [fundamentalsOpen, setFundamentalsOpen] = useState(false);
    const [recipesOpen, setRecipesOpen] = useState(false);

    const isActive = (link) => {
        const pathName = router.pathname;
        const { id } = router.query
        return pathName.includes(link) || id === link;
    }

    const renderDocumentationSideNav = () => {

        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={sideNavClasses.sideNavContainer}
            >
                <Grid item xs={12}>
                    <List className={sideNavClasses.sideNavList}>
                        <ListItem
                            button
                            onClick={() => setIntroductionOpen(!introductionOpen)}
                            className={
                                clsx(
                                    sideNavClasses.sideNavItem,
                                    !introductionOpen && isActive('/documentation/introduction') && sideNavClasses.sideNavListItemActive
                                )
                            }
                        >
                            <ListItemText disableTypography>
                                <Typography
                                    className={typographyClasses.listItemHeaderText}
                                >
                                    Introduction
                                </Typography>
                            </ListItemText>
                            {introductionOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={introductionOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem
                                    component={Link}
                                    href={'/documentation/introduction/getting-started'}
                                    button
                                    className={
                                        clsx(
                                            sideNavClasses.nestedSideNavItem,
                                            isActive('getting-started') && sideNavClasses.sideNavListItemActive
                                        )
                                    }
                                    naked
                                >
                                    <ListItemText disableTypography>
                                        <Typography className={typographyClasses.listItemText}>
                                            Getting Started
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem
                                    component={Link}
                                    href={'/documentation/introduction/installation'}
                                    button
                                    className={
                                        clsx(
                                            sideNavClasses.nestedSideNavItem,
                                            isActive('installation') && sideNavClasses.sideNavListItemActive
                                        )
                                    }
                                    naked
                                >
                                    <ListItemText disableTypography>
                                        <Typography className={typographyClasses.listItemText}>
                                            Installation
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem
                            button
                            onClick={() => setTutorialsOpen(!tutorialsOpen)}
                            className={
                                clsx(
                                    sideNavClasses.sideNavItem,
                                    !tutorialsOpen && isActive('/documentation/tutorials') && sideNavClasses.sideNavListItemActive
                                )
                            }
                        >
                            <ListItemText disableTypography>
                                <Typography
                                    className={typographyClasses.listItemHeaderText}
                                >
                                    Tutorials
                                </Typography>
                            </ListItemText>
                            {tutorialsOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={tutorialsOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem
                                    button
                                    className={
                                        clsx(
                                            sideNavClasses.nestedSideNavItem,
                                            !fundamentalsOpen && isActive('/documentation/tutorials/fundamentals') && sideNavClasses.sideNavListItemActive
                                        )
                                    }
                                    onClick={() => setFundamentalsOpen(!fundamentalsOpen)}
                                >
                                    <ListItemText disableTypography>
                                        <Typography className={typographyClasses.listItemText}>
                                            Fundamentals
                                        </Typography>
                                    </ListItemText>
                                    {fundamentalsOpen ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={fundamentalsOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('core-concepts') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/fundamentals/core-concepts'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Core Concepts
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('orchestrator') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/fundamentals/orchestrator'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Orchestrator
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('algorithm-context') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/fundamentals/algorithm-context'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Algorithm Context
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('data-providers') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/fundamentals/data-providers'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Data Providers
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('strategies') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/fundamentals/strategies'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Strategies
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('order-executors') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/fundamentals/order-executors'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Order Executors
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('portfolio-managers') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/fundamentals/portfolio-managers'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Portfolio Managers
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Collapse>
                                <ListItem
                                    button
                                    className={sideNavClasses.nestedSideNavItem}
                                    onClick={() => setRecipesOpen(!recipesOpen)}
                                >
                                    <ListItemText disableTypography>
                                        <Typography className={typographyClasses.listItemText}>
                                            Recipes
                                        </Typography>
                                    </ListItemText>
                                    {recipesOpen ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={recipesOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('overview') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/recipes/overview'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Overview
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('moving-average') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/recipes/moving-average'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Moving Average
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('telegram-integration') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/recipes/telegram-integration'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Telegram Integration
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem
                                            button
                                            className={
                                                clsx(
                                                    sideNavClasses.doubleNestedSideNavItem,
                                                    isActive('digitalocean-deployment') && sideNavClasses.sideNavListItemActive
                                                )
                                            }
                                            component={Link}
                                            href={'/documentation/tutorials/recipes/digitalocean-deployment'}
                                            naked
                                        >
                                            <ListItemText disableTypography>
                                                <Typography className={typographyClasses.listItemText}>
                                                    Digitalocean Deployment
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </Collapse>
                    </List>
                </Grid>
            </Grid>
        )
    }
    const {pathname} = router;

    return (
        <div className={sideNavClasses.sideNavContainer}>
            <Toolbar/>
            <br/>
            {pathname.includes('/documentation/') && renderDocumentationSideNav()}
        </div>
    );
};

export default SideNavContent;