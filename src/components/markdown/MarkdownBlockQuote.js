import React, {PureComponent} from 'react';
import {Divider, Stack} from "@mui/material";

export default class MarkdownBlockQuote extends PureComponent {
    render() {
        return (
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Divider orientation={"vertical"} style={{height: "40px"}}/>
                {this.props.children}
            </Stack>
        );
    }
}

