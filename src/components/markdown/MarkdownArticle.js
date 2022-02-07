import React from 'react';
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "./CodeBlock";
import MarkdownBlockQuote from "./MarkdownBlockQuote";
import {Box, Paper, Typography, useTheme} from "@mui/material";

const MarkdownArticle = ({markdown}) => {
    const theme = useTheme();
    return (
        <ReactMarkdown
            components={{
                h1: ({node, ...props}) => <Typography fontSize={40} style={{marginBottom: theme.spacing(2)}} {...props} />,
                h2: ({node, ...props}) => <Typography fontSize={36} style={{marginBottom: theme.spacing(2)}}{...props} />,
                h3: ({node, ...props}) => <Typography fontSize={32} style={{marginBottom: theme.spacing(2), marginTop: theme.spacing(2)}} {...props} />,
                h4: ({node, ...props}) => <Typography fontSize={28} style={{marginBottom: theme.spacing(2), marginTop: theme.spacing(2)}} {...props} />,
                h5: ({node, ...props}) => <Typography fontSize={24} style={{marginBottom: theme.spacing(2), marginTop: theme.spacing(2)}} {...props} />,
                h6: ({node, ...props}) => <Typography fontSize={20} style={{marginBottom: theme.spacing(2), marginTop: theme.spacing(2)}} {...props} />,
                code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <Box
                            component="div"
                            sx={{
                                overflow: 'auto',
                                maxWidth: {xs: "320px", sm: "600px", md: "800px", lg: "1100px"}
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
                            elevation={1}
                            style={
                                {
                                    color: theme.palette.text.secondary,
                                    width: "40px",
                                    display: "inline",
                                    paddingTop: "1px",
                                    paddingBottom: "1px",
                                    paddingLeft: "3px",
                                    paddingRight: "3px",
                                    border: "1px solid"
                                }
                        }
                            {...props}
                        >
                            {children}
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
    )
}

export default MarkdownArticle;