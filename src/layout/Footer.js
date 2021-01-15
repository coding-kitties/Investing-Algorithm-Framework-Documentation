import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Container, Link} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import powered_by_vercel from "../images/powered-by-vercel.svg";
import coding_kitties from "../images/coding-kitties.svg"

const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: 'auto',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    footerShift: {
        marginLeft: theme.drawerWidth,
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    linkList: {
        paddingLeft: theme.spacing(8)
    },
    header: {
        fontWeight: 'bold'
    },
    licensePaper: {
        backgroundColor: theme.palette.primary.light,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            height: 90,
        },
        [theme.breakpoints.down('xs')]: {
            height: 120,
        },
    },
    infoText: {
        color: '#fafafa',
    },
    headerLink: {
        color: '#000000'
    },
    linkButton: {
        textTransform: 'none',
        padding: 0
    },
    codingKittiesHeader: {
        fontSize: 14,
    }
}));

function PoweredByVercel(props) {
    return (
        <Link href={'https://vercel.com/?utm_source=investing-algorithm-framework-documentation&utm_campaign=oss'}>
            <img src={powered_by_vercel} alt="" {...props}/>
        </Link>
    );
}

const CodingKitties = props => {
    return (
        <img src={coding_kitties} alt="" {...props}/>
    )
}

const Footer = props =>  {
    const classes = useStyles();

    return (
        <Paper className={clsx(classes.footer, props.drawerOpen && classes.footerShift)}>
            <Container maxWidth="xl">
                <br/>
                <Paper color={'primary'} className={classes.licensePaper}>
                    <Typography align={"center"} className={classes.infoText}>
                        Investing Algorithm Framework Documentation website by Coding Kitties is licensed under a <Link
                            className={classes.headerLink}
                            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                        >
                             Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                        </Link>.
                    </Typography>
                </Paper>
                <br/>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item sm={6} md={3} className={classes.linkList}>
                        <br/>
                        <br/>
                        <Typography gutterBottom className={classes.header}>
                            Learn
                        </Typography>
                        <br/>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    component={Link}
                                    naked
                                    href={'/documentation/introduction/installation'}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Installation
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    component={Link}
                                    naked
                                    href={'/documentation/tutorials/fundamentals/orchestrator'}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Framework Fundamentals
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    component={Link}
                                    naked
                                    href={'/documentation/tutorials/recipes/moving-average'}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Framework Recipes
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} md={3} className={classes.linkList}>
                        <br/>
                        <br/>
                        <Typography gutterBottom className={classes.header}>
                            Framework Development
                        </Typography>
                        <br/>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    onClick={() => history.push('/development/framework/roadmap')}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Framework Roadmap
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    onClick={() => history.push('/development/framework/changelog')}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Framework Changelog
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} md={3} className={classes.linkList}>
                        <br/>
                        <br/>
                        <Typography gutterBottom className={classes.header}>
                            Documentation Development
                        </Typography>
                        <br/>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    onClick={() => history.push('/development/documentation/roadmap')}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Documentation Roadmap
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    onClick={() => history.push('/development/documentation/changelog')}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Documentation Changelog
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} md={3} className={classes.linkList}>
                        <br/>
                        <br/>
                        <Typography gutterBottom className={classes.header}>
                            Support
                        </Typography>
                        <br/>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    href={'http://inv-algo-framework.slack.com'}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Slack Community
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    href={'https://www.reddit.com/r/InvestingAlgorithms/'}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Reddit Community
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    href={'https://github.com/coding-kitties/investing-algorithm-framework'}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Github Framework Repo
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    className={classes.linkButton}
                                    href={'https://github.com/coding-kitties/investing-algorithm-framework-documentation'}
                                    variant={"text"}
                                    color={'primary'}
                                >
                                    Github Documentation Repo
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>
                <Divider/>
                <br/>
                <br/>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-end"
                >
                    <Grid item>
                        <CodingKitties height={15} style={{marginTop:4}}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.codingKittiesHeader} style={{fontWeight: 600}}>
                            Coding
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography color={"primary"} className={classes.codingKittiesHeader}>
                            Kitties
                        </Typography>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <Divider/>
                <br/>
                <br/>
                <PoweredByVercel/>
                <br/>
                <br/>
            </Container>
        </Paper>
    )
}

Footer.propTypes = {
    drawerOpen: PropTypes.bool.isRequired
}

Footer.defaultProps = {
    drawerOpen: false
}

export default Footer;
