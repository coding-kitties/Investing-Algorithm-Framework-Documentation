export const STARTED = 'STARTED';
export const FINISHED = 'FINISHED';

// Function to create Request types for an action
export function createLoadingTypes(base) {
    if (!base) {
        throw new Error('cannot create request type with base = \'\' or base = null');
    }

    return [STARTED, FINISHED].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
}
