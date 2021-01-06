import {makeStyles} from "@material-ui/core/styles";

export const usePaperStyles = makeStyles((theme) => ({
    contentPaper: {
        padding: theme.spacing(1)
    },
    contentHeaderPaper: {
        backgroundColor: theme.palette.primary.main,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }
}));
