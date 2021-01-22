import React from "react";
import ArticleView from "../src/views/ArticleView";
import MarkdownArticle from "../src/markdown/MarkdownArticle";
import Container from "@material-ui/core/Container";

const License = props => {

    return (
        <Container maxWidth={"md"}>
            <ArticleView
                sourceLink={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/src/articles/license.md'}
            >
                <MarkdownArticle markdown={props.markdown}/>
            </ArticleView>
        </Container>
    )
}

// This also gets called at build time
export async function getStaticProps() {
    const markdown = await require('../static/articles/license/license.md');
    return { props: { markdown: markdown.default} }
}

export default License;