import React from "react";
import ArticleView from "../../../../src/views/ArticleView";
import MarkdownArticle from "../../../../src/markdown/MarkdownArticle";


const DatabaseResolver = props => {

    return (
        <ArticleView sourceLink={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/src/articles/documentation/framework-features/database-management/sql-alchemy-database-resolver.md'}>
            <MarkdownArticle markdown={props.markdown}/>
        </ArticleView>
    )
}


// This also gets called at build time
export async function getStaticProps() {
    const markdown = await require('../../../../src/articles/documentation/framework_features/database_management/sql_alchemy_database_resolver.md');
    return { props: { markdown: markdown.default} }
}

export default DatabaseResolver;