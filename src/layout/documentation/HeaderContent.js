import React from 'react';
import {useRouter} from 'next/router'
import {Box, Button, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import {makeStyles, useTheme, withStyles} from "@mui/styles";
import {CustomTab, CustomTabs} from "../../components/tabs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faReddit} from "@fortawesome/free-brands-svg-icons";
import StorefrontIcon from '@mui/icons-material/Storefront';

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
        <img src={"/coding-kitties.svg"} alt="" {...props}/>
    )
}


export const HeaderContent = props => {
    const classes = useStyles();
    const router = useRouter();
    const theme = useTheme();
    // const matchesLGUp = useMediaQuery(theme.breakpoints.up('lg'));
    // const matchesMD = useMediaQuery(theme.breakpoints.only('md'));
    // const matchesSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    // const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));
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
        console.log(newValue);
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
        } else if(newValue === 5) {
            router.push('/support');
        }
    };

    return (
        <>
            <Toolbar variant={"dense"}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={0.5}
                >
                    <CodingKitties height={15}/>
                    <Typography style={{fontWeight: 600}} variant={"body2"}>
                        Coding
                    </Typography>
                    <Typography color={"primary"} variant={"body2"} style={{color: theme.palette.primary.main}}>
                        Kitties
                    </Typography>
                </Stack>
                <Box flexGrow={1}/>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={0.5}
                >
                    <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                        <img
                            src={'https://pepy.tech/badge/investing-algorithm-framework'}
                            alt={'downloads'}
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                        <img
                            src={'https://travis-ci.org/coding-kitties/investing-algorithm-framework.svg?branch=master'}
                            alt={'travis-ci-status'}
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                        <img
                            src={'https://img.shields.io/pypi/v/investing_algorithm_framework.svg'}
                            alt={'pypi version'}
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                        <img
                            src={'https://img.shields.io/github/stars/coding-kitties/investing-algorithm-framework.svg?label=github%20stars'}
                            alt={'github-stars'}
                        />
                    </Box>
                </Stack>
            </Toolbar>
            <Toolbar variant={"dense"}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    style={{width: "100%"}}
                >
                    <Typography variant={"h6"}>
                        Investing Algorithm Framework
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                        <CustomTabs value={tabValue()} onChange={handleChange} aria-label="simple tabs example">
                            <CustomTab label="About" {...a11yProps(0)} />
                            <CustomTab label="Documentation" {...a11yProps(1)} />
                            <CustomTab label="Development" {...a11yProps(2)} />
                            <CustomTab icon={<StorefrontIcon />} iconPosition="start"  label="Sell your algorithm" {...a11yProps(2)} />
                            <CustomTab label="License" {...a11yProps(3)} />
                            <CustomTab label="Support the project" {...a11yProps(4)} />
                        </CustomTabs>
                    </Box>
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}
                    >
                        <Button
                            startIcon={<FontAwesomeIcon icon={faGithub}/>}
                            href={'https://github.com/coding-kitties/investing-algorithm-framework'}
                            style={{color: "#000000"}}
                        >
                            Github
                        </Button>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                            <Button
                                startIcon={<FontAwesomeIcon icon={faReddit}/>}
                                href={'https://www.reddit.com/r/InvestingAlgorithms/'}
                                style={{color: "#000000"}}
                            >
                                Reddit
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Toolbar>
        </>
    )
};
