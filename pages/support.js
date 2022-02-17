import React from "react";
import ArticleView from "../src/views/ArticleView";
import {ButtonBase, Container, Divider, Stack, Typography} from "@mui/material";
import {MarkdownArticle} from "../src/components/markdown";
import {Alert} from "@mui/lab";
import {LowerCaseButton} from "../src/components/buttons";
import Link from "../src/components/Link";

const CodingKitties = props => {
    return (
        <img src={"/coding-kitties.svg"} alt="" {...props}/>
    )
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


const Support = props => {
    return (
        <Container maxWidth={"lg"}>
            <br/>
            <ArticleView
                showSource={false}
                sourceLink={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/static/articles/support.md'}
            >
                <MarkdownArticle markdown={props.markdown}/>
            </ArticleView>
            <br/>
            <Alert severity={"info"}>
                All donations and recurring pledges go directly into a fund for supporting the development of this framework.
            </Alert>
            <br/>
            <br/>
            <Typography>
                One-time Donations
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Typography>
                We accept donations through these channels:
            </Typography>
            <LowerCaseButton component={Link} naked href={'https://paypal.me/mvduyn?locale.x=nl_NL'}><img height={100} width={100} src={"./paypal.png"} /></LowerCaseButton>
            <br/>
            <br/>
            <Divider/>
            <Typography variant={"h4"}>Sponsors</Typography>
            <br/>
            <Typography variant={"body1"}>The investing-algorithm-framework is sponsored by the following sponsors:</Typography>
            <br/>
            <EltyerIcon/>
            <br/>
            <br/>
            <br/>
        </Container>
    )
}

// This also gets called at build time
export async function getStaticProps() {
    const markdown = await require('../src/articles/support.md');
    return { props: { markdown: markdown.default} }
}

export default Support;