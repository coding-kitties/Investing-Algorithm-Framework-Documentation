import React, {useEffect} from 'react';
import { useRouter } from 'next/router'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme, withStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {CustomTab, CustomTabs} from "../tabs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {faGithub, faSlack, faReddit} from "@fortawesome/free-brands-svg-icons";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {Button} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from "@material-ui/core/Toolbar";
import coding_kitties from "../images/coding-kitties.svg";

const useStyles = makeStyles(theme => ({
    header: {
        [theme.breakpoints.only('xs')]: {
            fontSize: 13,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 16,
        },
        [theme.breakpoints.up('lg')] : {
            fontSize: 24,
        }
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    active: {
        color: theme.palette.primary.main,
    },
    button: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
    },
    dropdown: {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    codingKittiesHeader: {
        fontSize: 14,
    }
}));


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CodingKitties = props => {
    return (
        <img src={coding_kitties} alt="" {...props}/>
    )
}


const HeaderContent = props => {
    const classes = useStyles();
    const router = useRouter();
    const theme = useTheme();
    const matchesLGUp = useMediaQuery(theme.breakpoints.up('lg'));
    const matchesMD = useMediaQuery(theme.breakpoints.only('md'));
    const matchesSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickAway = () => {
        setAnchorEl(null);
    };

    const tabValue = () => {
        if(router.pathname === '/') {
            return 0;
        } else if(router.pathname.includes('/documentation/')) {
            return 1;
        } else if(router.pathname.includes('/development/')) {
            return 2;
        } else if(router.pathname.includes('/license')) {
            return 3;
        } else if(router.pathname.includes('/support')) {
            return 4;
        }
    }


    const handleChange = (event, newValue) => {

        if(newValue === 0) {
            router.push('/');
        } else if(newValue === 1) {
            router.push('/documentation/overview');
        } else if(newValue === 2) {
            router.push('/development/overview');
        } else if(newValue === 3) {
            router.push('/license');
        } else if(newValue === 4) {
            router.push('/support');
        }
    };

    const renderLGUp = () => (
        <Toolbar>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={6} style={{marginTop: 10}}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <CodingKitties height={15} style={{marginTop:4}}/>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.codingKittiesHeader} style={{fontWeight: 600}}>
                                Coding
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color={"primary"} className={classes.codingKittiesHeader}>
                                Kitties
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                        spacing={1}
                    >
                        <Grid item>
                            <img
                                src={'https://pepy.tech/badge/investing-algorithm-framework'}
                                alt={'downloads'}
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src={'https://travis-ci.org/coding-kitties/investing-algorithm-framework.svg?branch=master'}
                                alt={'travis-ci-status'}
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src={'https://img.shields.io/pypi/v/investing_algorithm_framework.svg'}
                                alt={'pypi version'}
                            />
                        </Grid>
                        <Grid item>
                            <img
                                src={'https://img.shields.io/github/stars/coding-kitties/investing-algorithm-framework.svg?label=github%20stars'}
                                alt={'github-stars'}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography noWrap color={'primary'} className={classes.header}>
                        Investing Algorithm Framework
                    </Typography>
                </Grid>
                <Grid item>
                    <CustomTabs value={tabValue()} onChange={handleChange} aria-label="simple tabs example">
                        <CustomTab label="About" {...a11yProps(0)} />
                        <CustomTab label="Documentation" {...a11yProps(1)} />
                        <CustomTab label="Development" {...a11yProps(2)} />
                        <CustomTab label="License" {...a11yProps(3)} />
                        <CustomTab label="Support the project" {...a11yProps(4)} />
                    </CustomTabs>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item>
                            <Button
                                startIcon={<FontAwesomeIcon icon={faGithub}/>}
                                href={'https://github.com/coding-kitties/investing-algorithm-framework'}
                            >
                                Github
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                startIcon={<FontAwesomeIcon icon={faSlack}/>}
                                href={'https://inv-algo-framework.slack.com'}
                            >
                                Slack
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                startIcon={<FontAwesomeIcon icon={faReddit}/>}
                                href={'https://www.reddit.com/r/InvestingAlgorithms/'}
                            >
                                Reddit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )

    const renderMDDown = () => (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Grid item>
                <Typography noWrap color={'primary'} className={classes.header}>
                    Investing Algorithm Framework
                </Typography>
            </Grid>
            <Grid item>
                {matchesSmUp?
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <CustomTabs value={tabValue()} onChange={handleChange} aria-label="simple tabs example">
                                <CustomTab label="About" {...a11yProps(0)} />
                                <CustomTab label="Docs" {...a11yProps(1)} />
                            </CustomTabs>
                        </Grid>
                        <Grid item>
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <div>
                                <Button onClick={handleClick} endIcon={<ArrowDropDownIcon/>} className={classes.button}>More</Button>
                                    <StyledMenu
                                        id="customized-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <StyledMenuItem onClick={() => history.push('/development/general/overview')}>
                                            <ListItemText primary="Development" />
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={() => history.push('/license')}>
                                            <ListItemText primary="License" />
                                        </StyledMenuItem>
                                    </StyledMenu>
                                </div>
                            </ClickAwayListener>
                        </Grid>
                    </Grid> :
                    <Grid item>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <div>
                                <Button onClick={handleClick} endIcon={<ArrowDropDownIcon/>} className={classes.button}>More</Button>
                                <StyledMenu
                                    id="customized-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <StyledMenuItem onClick={() => history.push('/about')}>
                                        <ListItemText primary="About" />
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={() => history.push('/documentation/general/overview')}>
                                        <ListItemText primary="Documentation" />
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={() => history.push('/development/general/overview')}>
                                        <ListItemText primary="Development" />
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={() => history.push('/license')}>
                                        <ListItemText primary="License" />
                                    </StyledMenuItem>
                                </StyledMenu>
                            </div>
                        </ClickAwayListener>
                    </Grid>
                }
            </Grid>
            {matchesMD &&
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                        <Grid item>
                            <Button
                                startIcon={<FontAwesomeIcon icon={faGithub}/>}
                                href={'https://github.com/coding-kitties/investing-algorithm-framework'}
                            >
                                Github
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                startIcon={<FontAwesomeIcon icon={faSlack}/>}
                                href={'https://inv-algo-framework.slack.com'}
                            >
                                Slack
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Grid>
    )

    return (
        <>
            {matchesMdDown && renderMDDown()}
            {matchesLGUp && renderLGUp()}
        </>
    )
};

export default HeaderContent;