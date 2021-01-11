import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ScrollTrigger from 'react-scroll-trigger';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SubjectIcon from '@material-ui/icons/Subject';
import Typist from 'react-typist';
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Adsense} from '@ctrl/react-adsense';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Divider} from "@material-ui/core";
import {usePaperStyles} from "../src/styles";
import Link from "../src/Link";
import MarkdownArticle from "../src/markdown/MarkdownArticle";
import python_icon from '../src/images/python.svg'
import {useButtonStyles} from "../src/styles/button";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
  root: {
    transition: theme.transitions.create(),
    [theme.breakpoints.down('xs')]: {
      maxWidth: 500,
      margin: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: 700,
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
    marginRight: theme.spacing(2),
    textTransform: 'none',
    fontSize: 16
  },
  featureIcon: {
    color: theme.palette.primary.main
  },
  featureControlIcon: {
    color: theme.palette.primary.light
  },
  avatar: {
    fontSize: '80px',
    width: 'auto',
    height: 'auto',
  },
  announcementPaperLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: theme.palette.primary.main,
    border: '1px solid #6c5fc7',
  },
  announcementPaperRight: {
    borderRadius: 0,
    border: '1px solid #6c5fc7',
    borderRight: 'None'
  },
  announcementButton: {
    textTransform: 'none',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    maxHeight: '36px'
  },
  announcementTypographyLeft: {
    color: '#ffffff',
    padding: 5,
  },
  headerTitlePaper: {
    paddingLeft: theme.spacing(1)
  },
  announcementTypographyRight: {
    fontSize: 12,
    padding: 8
  },
  usageHeaderPaper: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '35px',
    padding: theme.spacing(1),
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  usageHeaderTypography: {
    color: '#ffffff',
  },
  contentPaper: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  infoBlockTypography: {
    paddingLeft: theme.spacing(1),
    color: '#ffffff',
  },
  infoBlockHeader: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '35px',
    padding: theme.spacing(1),
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  infoBlockContainedButton: {
    textTransform: 'none',
    color: theme.palette.primary.main,
    backgroundColor: '#ffffff'
  },
  infoBlockText: {
    marginLeft: theme.spacing(2)
  },
  installText: {
    fontSize: 36,
    lineHeight: 1.7,
    '&:message': {
      '&:cursor': {
        show: false,
        blink: true,
        element: '|',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000,
      }
    }
  }
}));


function PythonIcon(props) {
    return (
        <img src={python_icon} alt="" {...props}/>
    );
}

const AboutView = props => {
  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const paperClasses = usePaperStyles();
  const theme = useTheme();
  const matchesSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [installEnter, setInstallEnter] = useState(false);
  const onInstallEnterViewport = () => setInstallEnter(true);

  return (
        <>
            <Container maxWidth="lg">
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{maxWidth:800}}>
                    <Typography variant={matchesSmDown? "h4" : "h3"}>
                        Creating investing algorithms starts with a stable foundation
                    </Typography>
                <br/>
                <Typography variant={"body1"}>
                    A complete framework for taking control over your investing algorithms
                    with reliable core components, extensions, utilities and orchestration features.
                </Typography>
                </div>
                <br/>
                <br/>
                <Button
                    className={buttonClasses.standardButton}
                    color={"primary"}
                    variant={"contained"}
                    component={Link}
                    naked
                    href={'/documentation/installation'}
                >
                    Get Started
                </Button>
                <Button
                    className={buttonClasses.standardButton}
                    color={"primary"}
                    startIcon={<SubjectIcon/>}
                    component={Link}
                    naked
                    href={'/documentation/installation'}
                >
                    View Docs
                </Button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Paper>
                    <Paper className={clsx(paperClasses.contentPaper, paperClasses.contentHeaderPaper)}>
                        <Typography className={classes.infoBlockTypography}>
                            Usage
                        </Typography>
                    </Paper>
                    <Paper elevation={0} style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}} className={paperClasses.contentPaper}>
                        <br/>
                            <Typography variant={"body1"}>
                                The framework doesn't limit you in the way you define your data providers, strategies and algorithms.
                            </Typography>
                    </Paper>
                    <Paper style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                        <MarkdownArticle markdown={props.usageMarkdown}/>
                        <Divider/>
                    </Paper>
                    <Paper style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}} className={paperClasses.contentPaper}>
                        <Button
                            className={buttonClasses.standardButton}
                            color={"primary"}
                            startIcon={<SubjectIcon/>}
                            component={Link}
                            naked
                            href={'/documentation'}
                        >
                            Explore the docs
                        </Button>
                    </Paper>
                </Paper>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{maxWidth: 800}}>
                <Typography color={"primary"}>Abstraction of data providers</Typography>
                <Typography variant={"h4"}>Define your own data providers and integrate them with your strategies</Typography>
                <br/>
                <Typography variant={"body1"}>
                    Your investing algorithms need to have the best data source.
                    The framework allows you to take full control over the data providing for your algorithms with
                    abstractions, pre-made mixins and easy to use hooks, where your strategies can take full advatage of.
                </Typography>
                <br/>
                <br/>
                <Button
                    className={clsx(buttonClasses.standardButton, buttonClasses.invertedPrimaryButton)}
                    variant={"contained"}
                    component={Link}
                    naked
                    href={'/documentation/data-providers'}
                >
                    Learn about data providers
                </Button>
                </div>
            </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            <Paper className={classes.contentPaper}>
                <div className={classes.root}>
                    <br/>
                    <Typography variant={"h4"} color={'primary'}>Installation</Typography>
                    <br/>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        spacing={4}
                    >
                        <Grid item xs={8}>
                            <Typography variant={"h6"}>
                                The easiest way to install the Investing Algorithm Framework is from&nbsp;
                                <Link href={'https://pypi.org/project/investing-algorithm-framework/'}>Pypi</Link>, using&nbsp;
                                <Link href={'https://pypi.org/project/pip/'}>pip</Link>:
                            </Typography>
                            <br/>
                            <br/>
                            <div style={{backgroundColor: '#F5F5F5', padding: 10, minHeight: 80}}>
                                <ScrollTrigger onEnter={onInstallEnterViewport}>
                                {installEnter &&
                                    <Typist cursor={{show:false}} startDelay={1200}>
                                        <span className={classes.installText}>
                                        > pip install investing-algorithm-framework
                                        </span>
                                    </Typist>
                                }
                                </ScrollTrigger>
                            </div>
                            <br/>
                            <br/>
                            <Typography variant={"h6"}>
                                <FontAwesomeIcon icon={faBook}/> &nbsp; &nbsp; Read more detailed installations instructions in the&nbsp;
                                <Link href={'/documentation/general/installation'}>documentation</Link>.
                            </Typography>
                            <br/>
                            <Typography variant={"h6"}>
                                <FontAwesomeIcon icon={faGithub}/> &nbsp; &nbsp; Get the source code at&nbsp;
                                <Link href={'https://github.com/coding-kitties/investing-algorithm-framework'}>Github</Link>.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <PythonIcon width={200}/>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
        <br/>
        <br/>
        <br/>
        <Adsense
            client="ca-pub-6898179895018365"
            slot="7259870550"
            style={{ display: 'block' }}
            layout="in-article"
            format="fluid"
        />
    </>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  const usageMarkdown = await require(`../src/articles/usage.md`);
  const installationMarkdown = await require(`../src/articles/installation.md`);
  return { props: { usageMarkdown: usageMarkdown.default, installationMarkdown: installationMarkdown.default} }
}

export default AboutView;
