import React, {PureComponent} from 'react';
import Alert from '@material-ui/lab/Alert';

export default class MarkdownBlockQuote extends PureComponent {
    render() {
        return (
            <Alert variant={"outlined"} severity={"info"}>
                {this.props.children}
            </Alert>
        );
    }
}

