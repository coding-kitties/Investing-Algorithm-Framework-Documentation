import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {createAction} from "../../redux/actions";
import {CLEAR_EVENTS} from "../../redux/types";
import {Alert, Snackbar} from "@mui/material";


export const ActionsSuccessEventNotifier = () => {
    const dispatch = useDispatch();
    const successMessages = useSelector(state => state.events.successMessages);

    const handleSuccessClose = () => {
        dispatch(createAction(CLEAR_EVENTS));
    }

    if(successMessages !== null && successMessages.length !== 0) {

        return (
            <Snackbar
                open
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                autoHideDuration={3000}
                onClose={handleSuccessClose}
            >
                <Alert elevation={6} variant={"standard"} onClose={handleSuccessClose} severity="success">
                    <ul style={{"listStyleType": "none"}}>
                        {successMessages.map((successMessage) => {
                            return <li key={successMessage}>{successMessage}</li>
                        })}
                    </ul>
                </Alert>
            </Snackbar>
        )
    } else {
        return null
    }
}
