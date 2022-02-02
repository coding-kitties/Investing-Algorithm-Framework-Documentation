import {CircularProgress, Grid} from "@mui/material";

export const SpinningWheelComponent = (props) => {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            {...props}
        >
            <Grid item>
                <CircularProgress/>
            </Grid>
        </Grid>
    )
}