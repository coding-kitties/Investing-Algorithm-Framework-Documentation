import React, {useState} from 'react';
import {Alert, ButtonBase, Container, Paper, Stack, Typography} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";
import {MarkdownArticle} from "../src/components/markdown";
import {LowerCaseButton} from "../src/components/buttons";
import {OpenInNew} from "@mui/icons-material";
import Link from "../src/components/Link";
import ScrollTrigger from 'react-scroll-trigger';
import Typist from 'react-typist';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {BrokerCarousel} from "../src/components/carousels";


function PythonIcon(props) {
    return (
        <img src={"/python.svg"} alt="" {...props}/>
    );
}

function EltyerIcon(props) {
    return (
        <ButtonBase component={Link} href={"https://eltyer.com"}>
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <img src={"/images/eltyer_onlyicon.svg"} alt="eltyer" style={{width: "75px"}} {...props}/>
                <img src={"/images/eltyer_onlytext.svg"} alt="eltyer" style={{width: "150px", paddingBottom: "8px"}} {...props}/>
            </Stack>
        </ButtonBase>
    );
}

const useStyles = makeStyles(() => ({
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
    },
}));

const View = props => {
    const theme = useTheme();
    const classes = useStyles();
    const [installEnter, setInstallEnter] = useState(false);
    const onInstallEnterViewport = () => setInstallEnter(true);

    return (
        <>
            <Container maxWidth="lg">
                <br/>
                <br/>
                <div style={{maxWidth:800}}>
                    <Typography variant={"h3"}>
                        Creating investing algorithms starts with a stable foundation
                    </Typography>
                <br/>
                <Typography variant={"body1"}>
                    A complete framework for taking control over your investing algorithms
                    with reliable core components, extensions, utilities and expandability.
                </Typography>
                </div>
                <br/>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                >
                    <LowerCaseButton variant={"contained"}>
                        Get Started
                    </LowerCaseButton>
                    <LowerCaseButton>
                        View Docs
                    </LowerCaseButton>
                </Stack>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Paper elevation={4} style={{padding: "8px"}}>
                    <Typography variant={"subtitle1"}>
                        Quick Usage
                    </Typography>
                    <MarkdownArticle markdown={props.usageMarkdown}/>
                    <LowerCaseButton component={Link} href={"/documentation/getting-started"}>
                        Explore the docs
                    </LowerCaseButton>
                </Paper>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Container>
            <Paper style={{width: "100%", backgroundColor: "#eeeeee", padding: theme.spacing(4)}} elevation={0}>
                <Typography align={"center"}>Sponsored by</Typography>
                <br/>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <EltyerIcon/>
                </Stack>
            </Paper>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container maxWidth={"lg"}>
                <div style={{maxWidth: 800}}>
                    <Typography color={"primary"} variant={"body1"}>Abstraction of data providers</Typography>
                    <Typography variant={"h4"}>Define your own data providers and integrate them with your strategies</Typography>
                    <br/>
                    <Typography variant={"body1"}>
                        The framework allows you to take full control over the data providing for your algorithm with
                        abstractions, pre-made mixins and easy to use hooks, where your strategies can take full advantage of.
                    </Typography>
                    <br/>
                    <LowerCaseButton endIcon={<OpenInNew/>}>
                        Learn about data providers
                    </LowerCaseButton>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Paper style={{width: "100%"}} elevation={0}>
                    <br/>
                    <Typography variant={"h4"} color={'primary'}>Installation</Typography>
                    <br/>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Typography variant={"h6"}>
                                The easiest way to install the Investing Algorithm Framework is from&nbsp;
                                <Link href={'https://pypi.org/project/investing-algorithm-framework/'}>Pypi</Link>, using&nbsp;
                                <Link href={'https://pypi.org/project/pip/'}>pip</Link>:
                            </Typography>
                            <div style={{backgroundColor: '#F5F5F5', padding: 10, minHeight: 80, width: "100%"}}>
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
                            <Typography variant={"h6"}>
                                <FontAwesomeIcon icon={faBook}/> &nbsp; &nbsp; Read more detailed installation instructions in the&nbsp;
                                <Link href={'/documentation/introduction/installation'}>documentation</Link>.
                            </Typography>
                            <Typography variant={"h6"}>
                                <FontAwesomeIcon icon={faGithub}/> &nbsp; &nbsp; Get the source code at&nbsp;
                                <Link href={'https://github.com/coding-kitties/investing-algorithm-framework'}>Github</Link>.
                            </Typography>
                        </Stack>
                        <PythonIcon width={150}/>
                    </Stack>
                </Paper>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <div style={{maxWidth: 800}}>
                        <Typography color={"primary"} variant={"body1"}>Control over your strategies</Typography>
                        <Typography variant={"h4"}>
                            Run your strategies on specific time intervals and with custom data
                        </Typography>
                        <br/>
                        <Typography variant={"body1"}>
                            You can define your own strategies, specify when your strategies run and
                            have control over the data that is used for a specific strategy.
                        </Typography>
                        <br/>
                        <LowerCaseButton endIcon={<OpenInNew/>}>
                            Learn about strategies
                        </LowerCaseButton>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{maxWidth: 800}}>
                    <Typography color={"primary"} variant={"body1"}>Brokers</Typography>
                    <Typography variant={"h4"}>
                       Connect to any broker
                    </Typography>
                    <br/>
                    <Typography variant={"body1"}>
                        The framework allows you to create portfolio managers and order executors for any broker.
                        Currently, the framework comes with out of the box support for the following brokers:
                    </Typography>
                    <br/>
                </div>
                <br/>
                <BrokerCarousel brokers={[{label: "binance", image: "/brokers/binance.png"}]}/>
            </Container>
        </>
    )
}

// This also gets called at build time
export async function getStaticProps() {
  const usageMarkdown = await require(`../src/articles/usage.md`);
  return { props: { usageMarkdown: usageMarkdown.default} }
}

export default View;
