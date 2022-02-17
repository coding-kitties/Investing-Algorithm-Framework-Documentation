import React from 'react';
import {Tab, Tabs} from "@mui/material";
import {styled} from "@mui/material/styles";


export const CustomTabs = styled(Tabs)(({theme}) => ({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        minHeight: "4px",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: theme.palette.primary.main,
    },
}));

export const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({theme}) => ({
    textTransform: 'none',
    minWidth: 40,
    marginRight: theme.spacing(2)
}));
