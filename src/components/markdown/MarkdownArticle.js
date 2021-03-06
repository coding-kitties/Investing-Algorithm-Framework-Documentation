import React, {createElement} from 'react';
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "./CodeBlock";
import MarkdownBlockQuote from "./MarkdownBlockQuote";
import {Box, Paper, Typography, useTheme} from "@mui/material";

const MarkdownArticle = ({markdown}) => {
    const theme = useTheme();

    function flatten(text, child) {
        return typeof child === 'string'
            ? text + child
            : React.Children.toArray(child.props.children).reduce(flatten, text)
    }

    function HeadingRenderer(props) {
        let children = React.Children.toArray(props.children)
        let text = children.reduce(flatten, '')
        let slug = text.toLowerCase().replace(/\W/g, '-')
        return createElement(`h${props.level}`, { id: slug }, props.children);
    }

    return (
        <Box sx={{maxWidth: {xs: "500px", md: "600px", lg: "1000px"}}}>
            <ReactMarkdown
                components={{
                    h1: HeadingRenderer,
                    h2: HeadingRenderer,
                    h3: HeadingRenderer,
                    h4: HeadingRenderer,
                    h5: HeadingRenderer,
                    h6: HeadingRenderer,
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <Box
                                component="div"
                                sx={{
                                    overflow: 'hidden',
                                }}
                                flex={1} flexDirection="column" display="flex"
                            >
                                <CodeBlock
                                    value={String(children).replace(/\n$/, '')}
                                    language={match[1]}
                                />
                            </Box>
                        ) : (
                            <Paper
                                elevation={0}
                                style={
                                    {
                                        backgroundColor: "#f7f7f9",
                                        width: "40px",
                                        display: "inline",
                                        paddingTop: "1px",
                                        paddingBottom: "1px",
                                        paddingLeft: "3px",
                                        paddingRight: "3px",
                                        // border: "1px solid"
                                    }
                            }
                                {...props}
                            >
                                <a style={{color: theme.palette.primary.main}}>{children}</a>
                            </Paper>
                        )
                    },

                    // em: ({node, ...props}) => <Typography fontSize={20} style={{marginBottom: theme.spacing(2), marginTop: theme.spacing(2)}} {...props} />,
                    // pre: ({node, ...props}) => <Typography fontSize={20} style={{marginBottom: theme.spacing(2), marginTop: theme.spacing(2)}} {...props} />,
                    // strong: ({node, ...props}) => <Typography fontSize={20} style={{marginBottom: theme.spacing(2), marginTop: theme.spacing(2)}} {...props} />,
                    blockquote: ({node, ...props}) => <MarkdownBlockQuote {...props}/>,
                }}
            >
                {markdown}
            </ReactMarkdown>
        </Box>
    )
}

export default MarkdownArticle;