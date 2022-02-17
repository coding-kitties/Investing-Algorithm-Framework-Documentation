import React from 'react';
import {useRouter} from 'next/router'
import {Box, Button, IconButton, Stack, Toolbar, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/styles";
import {CustomTab, CustomTabs} from "../../components/tabs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faReddit} from "@fortawesome/free-brands-svg-icons";
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch, useSelector} from "react-redux";
import {sideNavOpenAction} from "../../redux/actions";

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


export const HeaderContent = ({handleSideNavOpenClick}) => {
    const router = useRouter();
    const theme = useTheme();
    const sideNavOpen = useSelector(state => state.layout.sideNavOpen);
    const lgDown = useMediaQuery(theme => theme.breakpoints.down("lg"));
    const dispatch = useDispatch();

    const tabValue = () => {
        if(router.pathname === '/') {
            return 0;
        } else if(router.pathname.includes('/documentation/')) {
            return 1;
        } else if(router.pathname.includes('/selling-algorithms')) {
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
            router.push('/documentation/getting-started');
        } else if(newValue === 2) {
            router.push('/selling-algorithms');
        } else if(newValue === 3) {
            router.push('/license');
        } else if(newValue === 4) {
            router.push('/support');
        }
    };

    return (
        <>
            <Toolbar variant={"dense"} style={{paddingLeft: "16px"}}>
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
            <Toolbar variant={"dense"} style={{paddingLeft: "16px", paddingRight: "8px"}}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    style={{width: "100%"}}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={lgDown? 1 : 20}
                        style={{width: "100%"}}
                    >
                        <Typography variant={"h6"}>
                            Investing Algorithm Framework
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                            <CustomTabs value={tabValue()} onChange={handleChange} aria-label="simple tabs example">
                                <CustomTab label="About" {...a11yProps(0)} />
                                <CustomTab label="Documentation" {...a11yProps(1)} />
                                <CustomTab icon={<StorefrontIcon />} iconPosition="start"  label="Sell your algorithm" {...a11yProps(2)} />
                                <CustomTab label="License" {...a11yProps(3)} />
                                <CustomTab label="Support the project" {...a11yProps(4)} />
                            </CustomTabs>
                        </Box>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={2}
                    >
                        <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                            <IconButton onClick={() => dispatch(sideNavOpenAction(!sideNavOpen))}>
                                <MenuIcon color={"text.secondary"}/>
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'none', lg: 'flex' }}}>
                            <Button
                                startIcon={<FontAwesomeIcon icon={faGithub}/>}
                                href={'https://github.com/coding-kitties/investing-algorithm-framework'}
                                style={{color: "#000000"}}
                            >
                                Github
                            </Button>
                            <Button
                                startIcon={<FontAwesomeIcon icon={faReddit}/>}
                                href={"https://www.reddit.com/r/InvestingBots/"}
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
