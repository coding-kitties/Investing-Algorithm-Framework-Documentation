import {makeStyles} from "@material-ui/core/styles";

export const useButtonStyles = makeStyles(theme => ({
    standardButton: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
    },
    invertedPrimaryButton: {
        color: theme.palette.primary.main,
        backgroundColor: '#FFFFFF'
    },
    textButton: {
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#FFF",
            color: theme.palette.primary.main
        }
    },
    textButtonSecondary: {
        color: theme.palette.primary.main,
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#dfdbf2",
        }
    },
    headerButton: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        marginLeft: theme.spacing(1),
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#FFF",
            color: theme.palette.primary.main
        }
    },
    activeHeaderButton: {
        color: theme.palette.primary.main
    },
}));