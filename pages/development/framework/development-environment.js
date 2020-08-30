import React from "react";
import ArticleView from "../../../src/views/ArticleView";
import MarkdownArticle from "../../../src/markdown/MarkdownArticle";

const DevelopmentEnvironment = props => {

    return (
        <ArticleView
            sourceLink={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/src/articles/development/general/development_environment.md'}
        >
            <MarkdownArticle markdown={props.markdown}/>
        </ArticleView>
    )
}

// This also gets called at build time
export async function getStaticProps() {
    const markdown = await require('../../../src/articles/development/framework/development_environment.md');
    return { props: { markdown: markdown.default} }
}

export default DevelopmentEnvironment;