import PropTypes from "prop-types";
import React, {PureComponent} from 'react';
import Alert from '@material-ui/lab/Alert';

export default class MarkdownBlockQuote extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
    };

    render() {
        return (
            <Alert variant={"outlined"} severity={"info"}>
                {this.props.children}
            </Alert>
        );
    }
}

MarkdownBlockQuote.propTypes = {
    value: PropTypes.string.isRequired,
}

