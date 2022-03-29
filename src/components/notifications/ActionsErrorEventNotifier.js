import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createAction} from "../../redux/actions";
import {CLEAR_EVENTS} from "../../redux/types";
import {Alert, Snackbar} from "@mui/material";

export const ActionsErrorEventNotifier = () => {
    const dispatch = useDispatch();
    const errorMessages = useSelector(state => state.events.errorMessages);
    const handleAlertClose = () => {dispatch(createAction(CLEAR_EVENTS));}

    if(errorMessages !== null && errorMessages.length !== 0) {
        return (
            <Snackbar
                open
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                autoHideDuration={3000}
                onClose={() => handleAlertClose()}
            >
                <Alert elevation={6} variant={"standard"} onClose={handleAlertClose} severity="error">
                    <ul style={{"listStyleType": "none"}}>
                        {errorMessages.map((errorMessage) => {return <li key={errorMessage}>{errorMessage}</li>})}
                    </ul>
                </Alert>
            </Snackbar>
        )
    } else {
        return null;
    }
}
