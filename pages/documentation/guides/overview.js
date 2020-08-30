import React from "react";
import MarkdownArticle from "../../../src/markdown/MarkdownArticle";
import ArticleView from "../../../src/views/ArticleView";


const GuidesOverview = props => {

    return (
         <ArticleView sourceLink={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/src/articles/documentation/guides/overview.md'}>
            <MarkdownArticle markdown={props.markdown}/>
         </ArticleView>
    )
}


// This also gets called at build time
export async function getStaticProps() {
    const markdown = await require('../../../src/articles/documentation/general/overview.md');
    return { props: { markdown: markdown.default} }
}

export default GuidesOverview;