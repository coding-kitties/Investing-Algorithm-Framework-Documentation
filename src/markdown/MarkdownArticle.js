import React, {useState, useEffect} from 'react';
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import CodeBlock from "./CodeBlock";

const MarkdownArticle = props => {

    const {
        markdown,
    } = props;

    return (
        <ReactMarkdown source={markdown} renderers={{code: CodeBlock}} escapeHtml={false}/>
    )
}

MarkdownArticle.propTypes = {
    markdown: PropTypes.string
};

export default MarkdownArticle;