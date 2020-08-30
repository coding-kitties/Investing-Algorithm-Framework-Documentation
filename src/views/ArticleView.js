import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";

import Link from '../../src/Link';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4)
    },
    contentPaper: {
        transition: theme.transitions.create(),
        [theme.breakpoints.up('xs')]: {
            padding: 24,
            maxWidth: 400,
            margin: 'auto',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: 650,
        },
        [theme.breakpoints.up('md')] : {
            maxWidth: 950,
        },
        [theme.breakpoints.up('lg')] : {
            maxWidth: 1250,
        },
    },
}));

const useHeaderStyles = makeStyles(theme => ({
    headerPaper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        height: 50,
        [theme.breakpoints.down('sm')]: {
            height: 80,
        },
        [theme.breakpoints.down('xs')]: {
            height: 100,
        },
        backgroundColor: theme.palette.primary.light
    },
    headerText: {
        color: '#f5f5f5',
    },
    headerLink: {
        color: '#000000'
    }
}));

const HeaderInfoComponent = () => {
    const classes = useHeaderStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.contentPaper}>
                <Paper className={classes.headerPaper}>
                    <Box display="flex" justifyContent="center" p={1.5}>
                        <Box>
                            <Typography className={classes.headerText}>
                                Note: further information of this tutorial and the source code can be found <Link
                                className={classes.headerLink}
                                href="https://github.com/coding-kitties/basic_algorithm"
                            >
                                here
                            </Link>.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Paper>
        </div>
    )
}


const ArticleView = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.contentPaper}>
                {props.headerInfo && <HeaderInfoComponent/>}
                {props.children}
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
            </Paper>
        </div>
    )
}

ArticleView.propTypes = {
    sourceLink: PropTypes.string.isRequired,
    headerInfo: PropTypes.bool
}

ArticleView.defaultProps = {
    headerInfo: false
}

export default ArticleView;