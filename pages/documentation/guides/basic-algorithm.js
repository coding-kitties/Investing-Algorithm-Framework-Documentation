import React from "react";
import ArticleView from "../../../src/views/ArticleView";
import MarkdownArticle from "../../../src/markdown/MarkdownArticle";

const BasicAlgorithm = props => {

    return (
        <ArticleView sourceLink={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/src/articles/documentation/guides/basic_algorithm.md'} headerInfo>
            <MarkdownArticle markdown={props.markdown}/>
        </ArticleView>
    )
}

// This also gets called at build time
export async function getStaticProps() {
    const markdown = await require('../../../src/articles/documentation/general/overview.md');
    return { props: { markdown: markdown.default} }
}

export default BasicAlgorithm;