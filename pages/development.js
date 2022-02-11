import {styled} from "@mui/material/styles";
import {useTheme} from "@mui/styles";
import {Container, Typography} from "@mui/material";
import React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import Link from "../src/Link";

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

const View = () => {
    const steps = ['Baseline', 'Stateless runner', 'More Broker support', 'Back testing', 'Dashboard', 'Telegram bot'];
    const theme = useTheme();

    return (
        <Container maxWidth={"lg"}>
            <br/>
            <Typography variant={"h2"}>Development</Typography>
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
            <Typography variant={"h3"}>Roadmap</Typography>
            <br/>
            <Typography variant={"body1"}>
                Currently the timeline beneath is a small overview of the roadmap that we have in mind for the framework.
            </Typography>
            <br/>
            <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Container>
    )
}

export default View;