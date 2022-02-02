import React, {PureComponent} from 'react';
import {Link} from "@mui/material";

export default class MarkdownLink extends PureComponent {

    render() {
        return (
            <Link href={this.props.href}>{this.props.children}</Link>
        );
    }
}
