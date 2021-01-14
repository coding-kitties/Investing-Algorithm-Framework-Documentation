import React, {useState} from 'react';
import clsx from 'clsx';
import {useTheme} from "@material-ui/core/styles";
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
import {usePaperStyles, useTypographyStyles, useButtonStyles} from "../src/styles";
import Link from "../src/Link";
import MarkdownArticle from "../src/markdown/MarkdownArticle";
import python_icon from '../src/images/python.svg'
import Container from "@material-ui/core/Container";


function PythonIcon(props) {
    return (
        <img src={python_icon} alt="" {...props}/>
    );
}

const AboutView = props => {
  const buttonClasses = useButtonStyles();
  const paperClasses = usePaperStyles();
  const typographyClasses = useTypographyStyles();

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
                    <Typography variant={matchesSmDown? "h5" : "h4"}>
                        Creating investing algorithms starts with a stable foundation
                    </Typography>
                <br/>
                <Typography className={typographyClasses.largeBody}>
                    A complete framework for taking control over your investing algorithms
                    with reliable core components, extensions, utilities and orchestration features.
                </Typography>
                </div>
                <br/>
                <br/>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item>
                        <Button
                            className={buttonClasses.standardButton}
                            color={"primary"}
                            variant={"contained"}
                            component={Link}
                            naked
                            href={'/documentation/introduction/installation'}
                        >
                            Get Started
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            className={buttonClasses.standardButton}
                            color={"primary"}
                            startIcon={<SubjectIcon/>}
                            component={Link}
                            naked
                            href={'/documentation/overview'}
                        >
                            View Docs
                        </Button>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Paper>
                    <Paper className={clsx(paperClasses.contentPaper, paperClasses.contentHeaderPaper)}>
                        <Typography className={typographyClasses.sectionHeaderWhite}>
                            Usage
                        </Typography>
                    </Paper>
                    <Paper elevation={0} style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}} className={paperClasses.contentPaper}>
                        <br/>
                            <Typography className={typographyClasses.largeBody}>
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
            <Paper style={{'padding': '30px'}}>
                <br/>
                <Typography variant={"h4"} color={'primary'}>Installation</Typography>
                <br/>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
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
                                    <span className={typographyClasses.installText}>
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
  return { props: { usageMarkdown: usageMarkdown.default} }
}

export default AboutView;
