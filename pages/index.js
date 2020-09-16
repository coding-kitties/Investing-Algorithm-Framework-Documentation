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
import {faBook, faLayerGroup, faDatabase, faTerminal, faSquare, faThList} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Divider} from "@material-ui/core";

import Link from "../src/Link";
import MarkdownArticle from "../src/markdown/MarkdownArticle";
import python_icon from '../src/images/python.svg'


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
  const theme = useTheme();
  const matchesSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [installEnter, setInstallEnter] = useState(false);
  const onInstallEnterViewport = () => setInstallEnter(true);

  const {
    history
  } = props;

  return  (
      <>
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
          <Paper elevation={0} className={clsx(classes.headerPaper)}>
            <br/>
            <br/>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
              <Grid item>
                <Paper elevation={0} className={classes.announcementPaperLeft}>
                  <Typography className={classes.announcementTypographyLeft}>
                    New
                  </Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper elevation={0} className={classes.announcementPaperRight}>
                  <Typography className={classes.announcementTypographyRight}>
                    Refactor of version v0.1
                  </Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Button color={"primary"} className={classes.announcementButton} variant={"outlined"}>See change log</Button>
              </Grid>
            </Grid>
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
          <br/>
          <br/>
          <Paper className={classes.infoBlockHeader}>
              <Typography className={classes.infoBlockTypography}>
                Usage
              </Typography>
          </Paper>
          <Paper className={classes.usageMarkdownPaper}>
            <br/>
            <Typography className={classes.infoBlockText} variant={"body1"}>
              The framework doesn't limit you in the way you define your data providers, strategies and algorithms.
            </Typography>
            <MarkdownArticle markdown={props.usageMarkdown}/>
            <Divider/>
            <br/>
            <Button style={{marginLeft: 6}}>Explore the docs</Button>
            <br/>
            <br/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
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
            <Button className={classes.infoBlockContainedButton} variant={"contained"}>Learn about data providers</Button>
          </div>
        </Grid>
      </Grid>
    </div>
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
    </>
    // <div className={classes.root}/>
    //   <Grid
    //       container
    //       direction="row"
    //       justify="center"
    //       alignItems="center"
    //   >
    //     <Grid item xs={12}>
    //       <br/>
    //       <br/>
    //       <br/>
    //       <br/>
    //       <br/>
    //       <br/>
    //       <Paper className={classes.infoBlockHeader}>
    //          <Typography className={classes.infoBlockTypography}>
    //            Core principles
    //          </Typography>
    //       </Paper>
    //       <Paper>
    //         <Grid
    //             container
    //             direction="row"
    //             justify="center"
    //             alignItems="flex-start"
    //         >
    //           <Grid item xs={12} md={4} className={classes.contentTextArea}>
    //             <Typography className={classes.headerText}>Faster development</Typography>
    //             <br/>
    //             <Typography className={classes.text}>
    //               The Framework gives you a stable foundation to build your algorithms on.
    //               This allows you to focus on implementing your investment strategies and
    //               build your algorithms with confidence.
    //             </Typography>
    //           </Grid>
    //           <Grid item xs={12} md={4} className={classes.contentTextArea}>
    //             <Typography className={classes.headerText}>Versatile</Typography>
    //             <br/>
    //             <Typography className={classes.text}>
    //               The framework can be used to build almost any type of investing algorithm.
    //               From traditional algorithms, through to machine learning algorithms
    //               and everything in between.
    //             </Typography>
    //           </Grid>
    //           <Grid item xs={12} md={4} className={classes.contentTextArea}>
    //             <Typography className={classes.headerText}>Complete</Typography>
    //             <br/>
    //             <Typography className={classes.text}>
    //               The framework follows the "Batteries included" philosophy and provides almost
    //               everything you need for a good foundation for the implementation of your
    //               investing algorithms "out of the box".
    //             </Typography>
    //           </Grid>
    //         </Grid>
    //         <Paper elevation={0} className={classes.bottomPaper}>
    //           <Grid
    //               container
    //               direction="row"
    //               justify="flex-start"
    //               alignItems="flex-end"
    //           >
    //             <Grid item>
    //               <Typography className={classes.secondaryText}>
    //                 Made for:
    //               </Typography>
    //             </Grid>
    //             <Grid item>
    //               <PythonIcon width={20} height={20} style={{marginLeft: 8}}/>
    //             </Grid>
    //           </Grid>
    //         </Paper>
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <div style={{maxWidth: 800}}>
    //       <Typography color={"primary"}>Implementation of strategies</Typography>
    //       <Typography variant={"h4"}>You can implement any type of strategy, where the framework aims to restrict you as  .</Typography>
    //       <br/>
    //       <Typography variant={"body1"}>
    //         The framework allows you to implement any type of strategy, full control over the data providing for your algorithms with
    //         abstractions, pre-made mixins and easy to use hooks, where your strategies can take full advatage of.
    //       </Typography>
    //       <br/>
    //       <br/>
    //       <Button className={classes.infoBlockContainedButton} variant={"contained"}>Learn about strategies</Button>
    //     </div>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     {/*<Paper>*/}
    //     {/*  <Grid*/}
    //     {/*      container*/}
    //     {/*      direction="row"*/}
    //     {/*      justify="flex-start"*/}
    //     {/*      alignItems="center"*/}
    //     {/*  >*/}
    //     {/*    <Grid item xs={12}>*/}
    //     {/*      <br/>*/}
    //     {/*      <br/>*/}
    //     {/*      <Typography align={"center"} variant={"h4"}>*/}
    //     {/*        Features overview*/}
    //     {/*      </Typography>*/}
    //     {/*      <br/>*/}
    //     {/*      <br/>*/}
    //     {/*    </Grid>*/}
    //     {/*    <Grid item xs={12} md={6}>*/}
    //     {/*      <Row gap={3}>*/}
    //     {/*        <Item>*/}
    //     {/*          <FontAwesomeIcon icon={faLayerGroup} size={"4x"} className={classes.featureIcon}/>*/}
    //     {/*        </Item>*/}
    //     {/*        <Info>*/}
    //     {/*          <Typography className={classes.headerText}>State based behaviour</Typography>*/}
    //     {/*          <Typography className={classes.text}>*/}
    //     {/*            Implement multiple states and let you algorithm change behaviour under*/}
    //     {/*            runtime*/}
    //     {/*          </Typography>*/}
    //     {/*        </Info>*/}
    //     {/*      </Row>*/}
    //     {/*    </Grid>*/}
    //     {/*    <Grid item xs={12} md={6}>*/}
    //     {/*      <Row gap={3}>*/}
    //     {/*        <Item>*/}
    //     {/*          <FontAwesomeIcon icon={faDatabase} size={"4x"} className={classes.featureIcon}/>*/}
    //     {/*        </Item>*/}
    //     {/*        <Info>*/}
    //     {/*          <Typography className={classes.headerText}>Database management</Typography>*/}
    //     {/*          <Typography className={classes.text}>*/}
    //     {/*            Database connection and session management*/}
    //     {/*          </Typography>*/}
    //     {/*        </Info>*/}
    //     {/*      </Row>*/}
    //     {/*    </Grid>*/}
    //     {/*    <Grid  item xs={12} md={6}>*/}
    //     {/*      <Row gap={3}>*/}
    //     {/*        <Item>*/}
    //     {/*          <FontAwesomeIcon icon={faTerminal} size={"4x"} className={classes.featureIcon}/>*/}
    //     {/*        </Item>*/}
    //     {/*        <Info>*/}
    //     {/*          <Typography className={classes.headerText}>Command line management</Typography>*/}
    //     {/*          <Typography className={classes.text}>*/}
    //     {/*            Manage your algorithms with the command line interface*/}
    //     {/*          </Typography>*/}
    //     {/*        </Info>*/}
    //     {/*      </Row>*/}
    //     {/*    </Grid>*/}
    //     {/*    <Grid item xs={12} md={6}>*/}
    //     {/*      <Row gap={3}>*/}
    //     {/*        <Item>*/}
    //     {/*          <FontAwesomeIcon icon={faSquare} size={"4x"} className={classes.featureIcon}/>*/}
    //     {/*        </Item>*/}
    //     {/*        <Info>*/}
    //     {/*          <Typography className={classes.headerText}>Templates support</Typography>*/}
    //     {/*          <Typography className={classes.text}>*/}
    //     {/*            Initialize your algorithm with one of the many templates to boost*/}
    //     {/*            your development*/}
    //     {/*          </Typography>*/}
    //     {/*        </Info>*/}
    //     {/*      </Row>*/}
    //     {/*    </Grid>*/}
    //     {/*    <Grid item xs={12} md={6}>*/}
    //     {/*      <Row gap={3}>*/}
    //     {/*        <Item>*/}
    //     {/*          <FontAwesomeIcon icon={faThList} size={"4x"} className={classes.featureIcon}/>*/}
    //     {/*        </Item>*/}
    //     {/*        <Info>*/}
    //     {/*          <Typography className={classes.headerText}>Model persistence</Typography>*/}
    //     {/*          <Typography className={classes.text}>*/}
    //     {/*            ORM support to provide the full power and flexibility of SQL*/}
    //     {/*            for your algorithms*/}
    //     {/*          </Typography>*/}
    //     {/*        </Info>*/}
    //     {/*      </Row>*/}
    //     {/*    </Grid>*/}
    //     {/*  </Grid>*/}
    //     {/*</Paper>*/}Paper
    //   </Grid>
    //   <br/>
    //   <br/>
    // </div>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  const usageMarkdown = await require(`../src/articles/usage.md`);
  const installationMarkdown = await require(`../src/articles/installation.md`);
  return { props: { usageMarkdown: usageMarkdown.default, installationMarkdown: installationMarkdown.default} }
}

export default AboutView;
