import React from 'react';
import ReactMarkdown from "react-markdown";
import Typography from "@material-ui/core/Typography";
import {useTypographyStyles} from "../styles";

const HeaderMarkdownRenderer = props => {
    const typographyClasses = useTypographyStyles();

    switch (props.level) {
        case 1:
            return <Typography className={typographyClasses.pageHeader}>{props.children}</Typography>
        case 2:
            return <Typography className={typographyClasses.sectionHeader}>{props.children}</Typography>
        case 3:
            return <Typography className={typographyClasses.sectionHeaderSecond}>{props.children}</Typography>
        case 4:
            return <Typography className={typographyClasses.sectionHeaderThird}>{props.children}</Typography>
        case 5:
            return <Typography className={typographyClasses.sectionHeaderFourth}>{props.children}</Typography>
        default:
            const Heading = ReactMarkdown.renderers.Heading
            return <Heading {...props} />
    }
}

export default HeaderMarkdownRenderer;

