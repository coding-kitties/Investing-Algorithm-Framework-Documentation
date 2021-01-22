import React, {useState, useEffect} from 'react';
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import CodeBlock from "./CodeBlock";
import MarkdownLink from "./MarkdownLink";
import MarkdownBlockQuote from "./MarkdownBlockQuote";
import HeaderMarkdownRenderer from "./HeaderMarkdown";
import TextMarkdownRenderer from "./TextMarkdown";

const MarkdownArticle = props => {

    const {
        markdown,
    } = props;

    return (
        <ReactMarkdown
            source={markdown}
            renderers={{
                code: CodeBlock,
                link: MarkdownLink,
                linkReference: MarkdownLink,
                blockquote: MarkdownBlockQuote,
                heading: HeaderMarkdownRenderer,
            }}
            escapeHtml={false}
        />
    )
}

MarkdownArticle.propTypes = {
    markdown: PropTypes.string
};

export default MarkdownArticle;