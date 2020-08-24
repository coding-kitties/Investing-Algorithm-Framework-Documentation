import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Link} from "@material-ui/core";
import {withRouter} from "react-router";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(4),
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
    }
}));

const FooterContent = props =>  {
    const classes = useStyles();
    const {history} = props;

    return (
        <Paper className={classes.root}>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item sm={12}>
                    <Paper color={'primary'} className={classes.licensePaper}>
                        <Typography align={"center"} className={classes.infoText}>
                            Investing Algorithm Framework Documentation by Coding Kitties is licensed under a <Link
                                className={classes.headerLink}
                                href="https://github.com/coding-kitties/investing-algorithm-framework-documentation"
                            >
                                 Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                            </Link>.
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item sm={6} md={3} className={classes.linkList}>
                    <br/>
                    <br/>
                    <Typography gutterBottom className={classes.header}>
                        Learn
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12}>
                            <Button
                                className={classes.linkButton}
                                onClick={() => history.push('/documentation/general/installation')}
                                variant={"text"}
                                color={'primary'}
                            >
                                Installation
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className={classes.linkButton}
                                onClick={() => history.push('/documentation/guides/overview')}
                                variant={"text"}
                                color={'primary'}
                            >
                                Framework Guides
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className={classes.linkButton}
                                onClick={() => history.push('/documentation/framework-features/overview')}
                                variant={"text"}
                                color={'primary'}
                            >
                                Framework Features
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
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"m
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
            <br/>
            <Divider style={{marginLeft: 25, marginRight: 25}}/>
                <br/>
                <br/>
                <Typography color={'textSecondary'} style={{marginLeft: 25}}>
                    Coding Kitties
                </Typography>
                <br/>
                <br/>
            <Divider style={{marginLeft: 25, marginRight: 25}}/>
            <br/>
            <br/>
        </Paper>
    )
}

export default withRouter(FooterContent);
