import React, {PureComponent} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SubjectIcon from '@material-ui/icons/Subject';
import {Row, Item} from '@mui-treasury/components/flex';
import {Info} from '@mui-treasury/components/info';
import {faLayerGroup, faDatabase, faTerminal, faSquare, faThList} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import python_icon from '../src/images/python.svg'
import Container from "../src/container";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string
    };

    static defaultProps = {
        language: null
    };

    render() {
        const { language, value } = this.props;
        return (
            <SyntaxHighlighter language={language} style={atomOneDark}>
                {value}
            </SyntaxHighlighter>
        );
    }
}

CodeBlock.defaultProps = {
    language: ''
}

CodeBlock.propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
}




const useStyles = makeStyles(theme => ({
    root: {
        transition: theme.transitions.create(),
        [theme.breakpoints.down('xs')]: {
            maxWidth: 300,
            margin: 'auto',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: 500,
            margin: 'auto',
        },
        [theme.breakpoints.up('md')] : {
            maxWidth: 900,
            margin: 'auto',
        },
        [theme.breakpoints.up('lg')] : {
            maxWidth: 1200,
            margin: 'auto',
        }
    },
    text: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 18
        },
    },
    headerText: {
        fontWeight: "bold",
        [theme.breakpoints.down('sm')]: {
            fontSize: 16
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 20
        }
    },
    contentTextArea: {
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        paddingRight: theme.spacing(5),
        [theme.breakpoints.down('lg')]: {
            paddingBottom: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            paddingBottom: theme.spacing(2),
        }
    },
    headerPaper: {
        backgroundColor: 'transparent',
    },
    bottomPaper: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: '#dedede',
        paddingLeft: theme.spacing(10),
        paddingTop: theme.spacing(1),
        height: 50
    },
    secondaryText: {
        color: '#9e9e9e',
        fontSize: 20
    },
    button: {
        marginRight: theme.spacing(1),
        textTransform: 'none',
        fontSize: 16
    },
    featureIcon: {
        color: theme.palette.primary.main
    },
    featureControlIcon: {
        color: theme.palette.primary.light
    }
}));


function PythonIcon(props) {
    return (
        <img src={python_icon} alt="" {...props}/>
    );
}
const AboutView = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSmDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {
        history
    } = props;
    return  (
        <Container>
            <div className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Paper elevation={0} className={clsx(classes.headerPaper)}>
                            <Typography variant={matchesSmDown? "h6" : "h4"}>
                                Investing Algorithm Framework
                            </Typography>
                            <Typography variant={matchesSmDown? "h6" : "h4"}>
                                helps you succeed in creating investing algorithms
                            </Typography>
                            <br/>
                            <br/>
                            <Button
                                className={classes.button}
                                color={"primary"}
                                variant={"contained"}
                                onClick={() => history.push('documentation/general/installation')}
                            >
                                Get Started
                            </Button>
                            <Button
                                className={classes.button}
                                color={"primary"}
                                startIcon={<SubjectIcon/>}
                                onClick={() => history.push('documentation/guides/overview')}
                            >
                                View Docs
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Paper>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="flex-start"
                            >
                                <Grid item xs={12} md={4} className={classes.contentTextArea}>
                                    <Typography className={classes.headerText}>Faster development</Typography>
                                    <br/>
                                    <Typography className={classes.text}>
                                        The Framework gives you a stable foundation to build your algorithms on.
                                        This allows you to focus on implementing your investment strategies and
                                        build your algorithms with confidence.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4} className={classes.contentTextArea}>
                                    <Typography className={classes.headerText}>Versatile</Typography>
                                    <br/>
                                    <Typography className={classes.text}>
                                        The framework can be used to build almost any type of investing algorithm.
                                        From traditional algorithms, through to machine learning algorithms
                                        and everything in between.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4} className={classes.contentTextArea}>
                                    <Typography className={classes.headerText}>Complete</Typography>
                                    <br/>
                                    <Typography className={classes.text}>
                                        The framework follows the "Batteries included" philosophy and provides almost
                                        everything you need for a good foundation for the implementation of your
                                        investing algorithms "out of the box".
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Paper elevation={0} className={classes.bottomPaper}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-end"
                                >
                                    <Grid item>
                                        <Typography className={classes.secondaryText}>
                                            Made for:
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <PythonIcon width={20} height={20} style={{marginLeft: 8}}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Paper>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <br/>
                                <br/>
                                <Typography align={"center"} variant={"h4"}>
                                    Features overview
                                </Typography>
                                <br/>
                                <br/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Row gap={3}>
                                    <Item>
                                        <FontAwesomeIcon icon={faLayerGroup} size={"4x"} className={classes.featureIcon}/>
                                    </Item>
                                    <Info>
                                        <Typography className={classes.headerText}>State based behaviour</Typography>
                                        <Typography className={classes.text}>
                                            Implement multiple states and let you algorithm change behaviour under
                                            runtime
                                        </Typography>
                                    </Info>
                                </Row>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Row gap={3}>
                                    <Item>
                                        <FontAwesomeIcon icon={faDatabase} size={"4x"} className={classes.featureIcon}/>
                                    </Item>
                                    <Info>
                                        <Typography className={classes.headerText}>Database management</Typography>
                                        <Typography className={classes.text}>
                                            Database connection and session management
                                        </Typography>
                                    </Info>
                                </Row>
                            </Grid>
                            <Grid  item xs={12} md={6}>
                                <Row gap={3}>
                                    <Item>
                                        <FontAwesomeIcon icon={faTerminal} size={"4x"} className={classes.featureIcon}/>
                                    </Item>
                                    <Info>
                                        <Typography className={classes.headerText}>Command line management</Typography>
                                        <Typography className={classes.text}>
                                            Manage your algorithms with the command line interface
                                        </Typography>
                                    </Info>
                                </Row>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Row gap={3}>
                                    <Item>
                                        <FontAwesomeIcon icon={faSquare} size={"4x"} className={classes.featureIcon}/>
                                    </Item>
                                    <Info>
                                        <Typography className={classes.headerText}>Templates support</Typography>
                                        <Typography className={classes.text}>
                                            Initialize your algorithm with one of the many templates to boost
                                            your development
                                        </Typography>
                                    </Info>
                                </Row>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Row gap={3}>
                                    <Item>
                                        <FontAwesomeIcon icon={faThList} size={"4x"} className={classes.featureIcon}/>
                                    </Item>
                                    <Info>
                                        <Typography className={classes.headerText}>Model persistence</Typography>
                                        <Typography className={classes.text}>
                                            ORM support to provide the full power and flexibility of SQL
                                            for your algorithms
                                        </Typography>
                                    </Info>
                                </Row>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <br/>
                <br/>
            </div>
        </Container>
    )
}

export default withRouter(AboutView);
