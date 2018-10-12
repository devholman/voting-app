import { SET_NAME_FIELD } from './constants.js';

export const setNameField = (text) => {
    console.log(text);
    return {
        type: SET_NAME_FIELD,
        payload: text
    }
}