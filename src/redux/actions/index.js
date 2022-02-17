export function createAction(type, payload = {}, showError = true, showSuccess = true) {
    return {
        ...payload,
        type,
        showError,
        showSuccess
    };
}

export * from "./loading";
export * from "./layout";
export * from "./event";