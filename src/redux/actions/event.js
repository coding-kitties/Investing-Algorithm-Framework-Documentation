import {createAction} from './index';
import {CLEAR_ERROR_EVENT, ERROR_EVENT} from "../types";

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const errorEventAction = (error, defaultMessage, throwException = true) => {
    let errorMessages = []

    if(!throwException) {
        return createAction(ERROR_EVENT, {message: []})
    }

    if(typeof error === 'string') {
        errorMessages.push(error);
    } else if(Array.isArray(error)) {
        errorMessages = error;
    } else if(error.response && error.response.status) {

        if(error.response.status >= 400 && error.response.status < 500) {

            if(typeof error.response.data.error_message === 'string') {
                errorMessages.push(error.response.data.error_message);
            } else if(typeof error.response.data.error_message === 'object') {
                Object.keys(error.response.data.error_message).forEach((errorKey) => {
                    if(typeof error.response.data.error_message[errorKey] === "object") {
                        Object.keys(error.response.data.error_message[errorKey]).forEach((errorKeySecondary) => {
                            let message = `${errorKeySecondary} ${error.response.data.error_message[errorKey][errorKeySecondary]}`;
                            message = message.replace(/_/g, ' ');
                            errorMessages.push(capitalize(message));
                        });
                    } else {
                        let message = `${errorKey} ${error.response.data.error_message[errorKey]}`;
                        message = message.replace(/_/g, ' ');
                        errorMessages.push(capitalize(message));
                    }
                });
            }
        } else if(error.response.status === 503) {
            if(typeof error.response.data.error_message === 'string') {
                errorMessages.push(capitalize(error.response.data.error_message));
            }
        }
    }

    if(errorMessages.length === 0) {

        if(defaultMessage === undefined) {
            errorMessages.push("Something went wrong");
        } else {
            errorMessages.push(defaultMessage);
        }
    }

    return createAction(ERROR_EVENT, {message: errorMessages});
};

export const clearErrorEventAction = () => createAction(CLEAR_ERROR_EVENT);

import {CLEAR_SUCCESS_EVENT, SUCCESS_EVENT} from "../types";

export const successEventAction = (successMessage, showSuccess = true) => {

    let successMessages = []

    if(!showSuccess) {
        return createAction(SUCCESS_EVENT, {message: []})
    }

    if(typeof successMessage === 'string') {
        successMessages.push(successMessage);
    } else if(Array.isArray(successMessage)) {
        successMessages = successMessage;
    }

    return createAction(SUCCESS_EVENT, {message: successMessages});
}

export const clearSuccessEventAction = () => createAction(CLEAR_SUCCESS_EVENT);