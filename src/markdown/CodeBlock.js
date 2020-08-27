import PropTypes from "prop-types";
import React, {PureComponent} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string
    };

    static defaultProps = {
        language: null
    };

    render() {
        const { language, value } = this.props;
        return (
            <SyntaxHighlighter language={language} style={atomOneDark}>
                {value}
            </SyntaxHighlighter>
        );
    }
}

CodeBlock.defaultProps = {
    language: ''
}

CodeBlock.propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
}