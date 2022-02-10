import React from "react";
import glob from 'glob';

import {MarkdownArticle} from "../../../src/components/markdown";
import {wrapper} from "../../../src/redux/store";
import ArticleView from "../../../src/views/ArticleView";
import {sideNavValueAction} from "../../../src/redux/actions";


const MarkdownPage = props => {

    return (
        <div style={{padding: "8px"}}>
            <ArticleView sourceLink={props.articleSrc}>
                <MarkdownArticle markdown={props.markdown}/>
            </ArticleView>
        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    const articles = glob.sync("./src/articles/documentation-tutorials/*.md");

    const paths = articles.map((article) => {
        let pathName = article.split("./src/articles/documentation-tutorials/")[1]
        pathName = pathName.split(".md")[0]
        return `/documentation/tutorials/${pathName}`;
    })

    return { paths, fallback: false }
}

export const getStaticProps = wrapper.getServerSideProps((store) =>
    async ({ req, res, ...etc }) => {
        const markdown = await require(`../../../src/articles/documentation-tutorials/${etc.params.id}.md`);
        let articleSrc = `https://github.com/eltyer/blob/master/src/articles/documentation-tutorials/${etc.params.id}.md`
        store.dispatch(sideNavValueAction(etc.params.id));
        return { props: { markdown: markdown.default, articleSrc: articleSrc} }
    }
);

export default MarkdownPage;