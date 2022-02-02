import React from 'react';
import {styled} from "@mui/material/styles";
import {LoadingButton} from "@mui/lab";

export const LowerCaseButton = styled(LoadingButton)(
    ({}) => ({
        textTransform: 'none',
        fontSize: 12
    })
)
