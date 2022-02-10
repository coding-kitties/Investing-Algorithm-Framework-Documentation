import {ButtonBase, Container, Stack, Typography} from "@mui/material";
import React from "react";
import {LowerCaseButton} from "../src/components/buttons";
import {OpenInNew} from "@mui/icons-material";
import Link from "../src/Link";
import {useTheme} from "@mui/styles";

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

const View = () => {
    const theme = useTheme();

    return (
        <Container maxWidth={"lg"}>
            <br/>
            <Typography variant={"h2"}>Selling or sharing your algorithm</Typography>
            <br/>
            <Typography variant={"body1"}>
                You can sell or share your algorithm with the following supported marketplaces.
            </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={5}
            >
                <EltyerIcon/>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Typography variant={"body1"} color={"text.secondary"}>
                        ELTYER is and open digital marketplace to discover, rent, and sell top performing
                        trading bots on reliable infrastructure.
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <LowerCaseButton component={Link} href={"https://eltyer.com"} endIcon={<OpenInNew/>} style={{paddingLeft: "0px"}}>Go to marketplace</LowerCaseButton>
                        <LowerCaseButton component={Link} href={"https://docs.eltyer.com/investing-algorithm-framework-plugin/introduction"} endIcon={<OpenInNew/>} style={{paddingLeft: "0px"}}>Go to documentation</LowerCaseButton>
                    </Stack>
                </Stack>
            </Stack>
            <br/>
            <br/>
            <br/>
            <br/>
            <Typography>Would you like your company on this page? Please send an email to <a style={{color: theme.palette.primary.main}}>codingkitties@gmail.com</a>.</Typography>
        </Container>
    )
}

export default View;