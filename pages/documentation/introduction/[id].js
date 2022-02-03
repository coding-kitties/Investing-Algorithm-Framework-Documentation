import glob from 'glob';
import ArticleView from "../../../src/views/ArticleView";
import {MarkdownArticle} from "../../../src/components/markdown";
import React from "react";


const MarkdownPage = props => {

    return (
        <ArticleView sourceLink={props.articleSrc}>
            <MarkdownArticle markdown={props.markdown}/>
        </ArticleView>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    const articles = glob.sync("./static/articles/documentation_introduction/*.md");

    // Get the paths we want to pre-render based on posts
    const paths = articles.map((article) => {
        let pathName = article.split("./static/articles/documentation_introduction/")[1]
        pathName = pathName.split(".md")[0]
        return `/documentation/introduction/${pathName}`;
    })

    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const markdown = await require(`../../../static/articles/documentation-introduction/${params.id}.md`);
    let articleSrc = `https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/static/articles/documentation-introduction/${params.id}.md`
    return { props: { markdown: markdown.default, articleSrc: articleSrc} }
}

export default MarkdownPage;