import React from "react";
import PropTypes from "prop-types";
import {Divider, Paper, Stack, Typography} from "@mui/material";
import Link from "../components/Link";


const ArticleView = props => {

    return (
        <div>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <div>
                    {props.children}
                    {props.showSource &&
                        <>
                            <br/>
                            <Divider/>
                            <br/>
                            <Typography variant={"h5"} color={"primary"}>Help make this document better</Typography>
                            <br/>
                            <Typography>
                            This guide, as well as the rest of our docs, are open-source and
                            available on <Link href="https://github.com/coding-kitties/investing-algorithm-framework-documentation">Github
                            </Link>. We welcome your contributions.
                            </Typography>
                            <ul>
                            <li>
                            <Link href={props.sourceLink}>Suggest an edit to this page</Link> (please read the <Link href={"https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/docs/CONTRIBUTING.md"}>contributing</Link> guide first).
                            </li>
                            <li>To report a problem in the documentation, or to submit feedback and comments, please open an <Link href={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/issues/new/choose'}>issue</Link> on GitHub</li>
                            </ul>
                            <br/>
                            <Divider/>
                        </>
                    }
                </div>
                <Paper elevation={0} style={{minWidth: "350px", marginRight: "16px"}}>

                </Paper>
            </Stack>
        </div>
    )
}

ArticleView.propTypes = {
    sourceLink: PropTypes.string.isRequired,
    headerInfo: PropTypes.bool,
    showSource: PropTypes.bool
}

ArticleView.defaultProps = {
    headerInfo: false,
    showSource: true
}

export default ArticleView;