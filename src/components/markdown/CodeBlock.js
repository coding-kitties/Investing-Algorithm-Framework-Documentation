import React, {useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {Paper, Stack, Typography, useMediaQuery} from "@mui/material";
import {useDispatch} from "react-redux";
import {successEventAction} from "../../redux/actions";
import {LowerCaseButton} from "../buttons";


export const CodeBlock = ({language, value}) => {
    const [showCopy, setShowCopy] = useState(false);
    const dispatch = useDispatch();
    const mdDown = useMediaQuery(theme => theme.breakpoints.down("md"));

    const handleClickCopy = () => {
        if(document.queryCommandSupported('copy')) {
            navigator.clipboard.writeText(value);
            dispatch(successEventAction(["Value Copied!"]))
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
            style={{backgroundColor: "#282c34", width: "100%"}}
            onMouseEnter={() => setShowCopy(true)}
            onMouseLeave={() => setShowCopy(false)}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                style={{paddingLeft: "2px", paddingRight: "2px"}}
            >
                <SyntaxHighlighter language={language} style={atomOneDark}>
                    {value}
                </SyntaxHighlighter>
                <LowerCaseButton onClick={handleClickCopy}>
                    <Typography style={{color: showCopy? "#ffffff" : "#282c34"}}>copy</Typography>
                </LowerCaseButton>
            </Stack>
        </Paper>
    );
}
