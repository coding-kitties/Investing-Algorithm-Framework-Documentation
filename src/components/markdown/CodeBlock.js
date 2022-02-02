import React, {useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {Paper, Stack, Typography} from "@mui/material";
import {LowerCaseButton} from "../buttons";


export const CodeBlock = ({language, value}) => {
    const [showCopy, setShowCopy] = useState(false);

    const handleClickCopy = () => {
        if(document.queryCommandSupported('copy')) {
            navigator.clipboard.writeText(value);
            // dispatch(successEventAction(["Value Copied!"]))
        }
    }


    if(language === "response") {
        return (
            <Paper style={{backgroundColor: "#282c34"}}>
                <SyntaxHighlighter language={"json"} style={github}>
                    {value}
                </SyntaxHighlighter>
            </Paper>
        )
    }
    return (
        <Paper
            style={{backgroundColor: "#282c34"}}
            onMouseEnter={() => setShowCopy(true)}
            onMouseLeave={() => setShowCopy(false)}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <SyntaxHighlighter language={language} style={atomOneDark}>
                    {value}
                </SyntaxHighlighter>
                {showCopy &&
                    <LowerCaseButton onClick={handleClickCopy}>
                        <Typography style={{color: "#ffffff"}}>copy</Typography>
                    </LowerCaseButton>
                }
            </Stack>
        </Paper>
    );
}
