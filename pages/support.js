import React from "react";
import ArticleView from "../src/views/ArticleView";
import {Container, Divider, Typography} from "@mui/material";
import {MarkdownArticle} from "../src/components/markdown";
import {Alert} from "@mui/lab";
import {LowerCaseButton} from "../src/components/buttons";
import Link from "../src/components/Link";

const CodingKitties = props => {
    return (
        <img src={"/coding-kitties.svg"} alt="" {...props}/>
    )
}

const Support = props => {
    return (
        <Container maxWidth={"md"}>
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
            <Typography>
                Recurring Pledges
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Typography>
                Recurring pledges come with exclusive perks, e.g. having your name listed
                in the Investing Algorithm Framework GitHub repository, or have your company logo placed on this website.
            </Typography>
            <ul>
                <li>
                    <Link href={'https://www.patreon.com/mduyn'}>
                        Become a backer or sponsor via Patreon
                    </Link>
                </li>
            </ul>
            <br/>
            <Typography>
                Current Premium Sponsors
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Typography>
                Patreon Gold Sponsors
            </Typography>
            <br/>
            <br/>
            <br/>
            <Typography>
                Patreon Sponsors
            </Typography>
            <br/>
            <br/>
            <br/>
        </Container>
    )
}

// This also gets called at build time
export async function getStaticProps() {
    const markdown = await require('../static/articles/support.md');
    return { props: { markdown: markdown.default} }
}

export default Support;