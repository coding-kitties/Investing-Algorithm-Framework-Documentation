import React, {useState} from 'react';
import {ButtonBase, Container, Paper, Stack, Typography} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";
import {CodeMarkdown, MarkdownArticle} from "../src/components/markdown";
import {LowerCaseButton} from "../src/components/buttons";
import {OpenInNew} from "@mui/icons-material";
import Link from "../src/components/Link";
import ScrollTrigger from 'react-scroll-trigger';
import Typist from 'react-typist';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {BrokerCarousel} from "../src/components/carousels";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {styled} from "@mui/material/styles";
import StepConnector, {stepConnectorClasses} from "@mui/material/StepConnector";
import Check from "@mui/icons-material/Check";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.primary.main,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.primary.main,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: theme.palette.primary.main,
    }),
    '& .QontoStepIcon-completedIcon': {
        color: theme.palette.primary.main,
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}


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
    const steps = ['Baseline', 'Stateless runner', 'Expand broker support', 'Back testing', 'Dashboard', 'Telegram bot'];

    return (
        <>
            <Container maxWidth="lg">
                <br/>
                <br/>
                <Typography variant={"h2"}>
                    Creating investing algorithms starts with a stable foundation
                </Typography>
                <br/>
                <Typography variant={"body1"}>
                    A complete framework for taking control over your investing algorithms
                    with reliable core components, extensions, utilities and expandability.
                </Typography>
                <br/>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                >
                    <LowerCaseButton componet={Link} href={"/documentation/tutorials/quickstart"} variant={"contained"}>
                        Get Started
                    </LowerCaseButton>
                    <LowerCaseButton componet={Link} href={"/documentation/getting-started"} >
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
                    <CodeMarkdown markdown={props.usageMarkdown}/>
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
            <Paper style={{width: "100%", backgroundColor: "#eeeeee", padding: theme.spacing(4), borderRadius: 0}} elevation={0}>
                <Typography variant={"body1"} align={"center"}>Sponsored by</Typography>
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
                    <LowerCaseButton endIcon={<OpenInNew/>} style={{paddingLeft: "0px"}} component={Link} href={"/documentation/guides/data-providers"}>
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
                                You can install the Investing Algorithm Framework with&nbsp;
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
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={0.5}
                                >
                                    <Typography variant={"body1"}>
                                        Get the source code at
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        underline={"none"}
                                        href={'https://github.com/coding-kitties/investing-algorithm-framework'}
                                        variant={"body1"}
                                    >
                                        Github
                                    </Typography>
                                </Stack>
                            </Stack>
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
                        <LowerCaseButton endIcon={<OpenInNew/>} style={{paddingLeft: "0px"}} component={Link} href={"/documentation/guides/strategies"}>
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
                    <Typography variant={"h4"}>Connect to any broker</Typography>
                    <br/>
                    <Typography variant={"body1"}>
                        The framework allows you to create portfolio managers and order executors for any broker.
                        Currently, the framework comes with out of the box support for the following brokers:
                    </Typography>
                    <br/>
                </div>
                <br/>
                <BrokerCarousel brokers={[{label: "binance", image: "/brokers/binance.png"}]}/>
                <br/>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={0.5}
                >
                    <Typography variant={"body1"}>
                        Your broker not in the list? Learn how to create your own
                    </Typography>
                    <Typography
                        variant={"body1"}
                        component={Link}
                        href={"/documentation/tutorials/quickstart#i-want-to-connect-to-a-broker-that-is-not-yet-supported"}
                        underline={"none"}
                    >
                        components.
                    </Typography>
                </Stack>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Typography variant={"h4"}>Development</Typography>
                <br/>
                <Typography variant={"body1"}>
                    The framework is continuously updated and maintained. If you have a feature request you
                    can send a email to <a style={{color: theme.palette.primary.main}}>codingkitties@gmail.com</a> or you
                    could open an <Link href={"https://github.com/coding-kitties/investing-algorithm-framework/issues/new"}>issue </Link> at our
                    github repo. You could also join the <Link href={"https://www.reddit.com/r/InvestingBots/"}>reddit </Link>
                    to discuss topics with other developers.
                </Typography>
                <br/>
                <br/>
                <Typography variant={"h5"}>Roadmap</Typography>
                <br/>
                <Typography variant={"body1"}>
                    The timeline beneath is a small overview of the roadmap that we have in mind for the framework.
                </Typography>
                <br/>
                <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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
