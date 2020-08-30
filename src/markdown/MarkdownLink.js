import PropTypes from "prop-types";
import React, {PureComponent} from 'react';
import Link from "../Link";

export default class MarkdownLink extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
     };

    render() {
        return (
            <Link href={this.props.href}>{this.props.children[0].props.value}</Link>
        );
    }
}

MarkdownLink.propTypes = {
    value: PropTypes.string.isRequired,
}