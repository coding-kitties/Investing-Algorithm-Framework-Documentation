import React from "react";
import PropTypes from "prop-types";
import {Box, Divider, Paper, Stack, Typography} from "@mui/material";
import Link from "../components/Link";


const ArticleView = ({sourceLink, showSource = true, children}) => {

    return (
        <div>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <div style={{padding: "8px"}}>
                    {children}
                </div>
                <Box sx={{ display: { xs: 'none', lg: 'flex' }}}>
                    <div style={{minWidth: "600px"}}>

                    </div>
                </Box>
            </Stack>
            {showSource &&
                <>
                    <Divider/>
                    <br/>
                    <Stack
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant={"h5"} color={"primary"}>Help make this document better</Typography>
                        <Typography>
                            This guide, as well as the rest of our docs, are open-source and
                            available on <Link href="https://github.com/coding-kitties/investing-algorithm-framework-documentation">Github
                        </Link>. We welcome your contributions.
                        </Typography>
                        <ul>
                            <li>
                                <Link href={sourceLink}>Suggest an edit to this page</Link> (please read the <Link href={"https://github.com/coding-kitties/investing-algorithm-framework-documentation/blob/master/docs/CONTRIBUTING.md"}>contributing</Link> guide first).
                            </li>
                            <li>To report a problem in the documentation, or to submit feedback and comments, please open an <Link href={'https://github.com/coding-kitties/investing-algorithm-framework-documentation/issues/new/choose'}>issue</Link> on GitHub</li>
                        </ul>
                    </Stack>
                    <br/>
                    <Divider/>
                </>
            }
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