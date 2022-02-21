import React from 'react';
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "./CodeBlock";
import MarkdownBlockQuote from "./MarkdownBlockQuote";
import {Box, Paper, useTheme} from "@mui/material";

export const CodeMarkdown = ({markdown}) => {
    const theme = useTheme();

    return (
        <ReactMarkdown
            components={{
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
    )
}
