import React from 'react';
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "./CodeBlock";
import MarkdownBlockQuote from "./MarkdownBlockQuote";
import {Typography} from "@mui/material";
import {useTheme} from "@mui/styles";

export const MarkdownArticle = ({markdown}) => {
    const theme = useTheme();
    return (
        <ReactMarkdown
            components={{
                h1: ({node, ...props}) => <Typography variant={"h1"} style={{marginBottom: theme.spacing(4)}} {...props} />,
                h2: ({node, ...props}) => <Typography variant={"h2"} style={{marginBottom: theme.spacing(4)}}{...props} />,
                h3: ({node, ...props}) => <Typography variant={"h3"} style={{marginBottom: theme.spacing(2)}} {...props} />,
                h4: ({node, ...props}) => <Typography variant={"h4"} style={{marginBottom: theme.spacing(2)}} {...props} />,
                h5: ({node, ...props}) => <Typography variant={"h5"} style={{marginBottom: theme.spacing(2)}} {...props} />,
                h6: ({node, ...props}) => <Typography variant={"h6"} style={{marginBottom: theme.spacing(2)}} {...props} />,
                code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <CodeBlock
                            value={String(children).replace(/\n$/, '')}
                            language={match[1]}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                },
                blockquote: ({node, ...props}) => <MarkdownBlockQuote {...props}/>,
            }}
        >
            {markdown}
        </ReactMarkdown>
    )
}

