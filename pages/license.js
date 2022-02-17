import React from "react";
import ArticleView from "../src/views/ArticleView";
import {MarkdownArticle} from "../src/components/markdown";
import {Container} from "@mui/material";

const License = props => {

    return (
        <Container maxWidth={"lg"}>
            <br/>
            <ArticleView
                sourceLink={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/src/articles/license.md'}
                showSource={false}
            >
                <MarkdownArticle markdown={props.markdown}/>
            </ArticleView>
        </Container>
    )
}

// This also gets called at build time
export async function getStaticProps() {
    const markdown = await require('../src/articles/license/license.md');
    return { props: { markdown: markdown.default} }
}

export default License;