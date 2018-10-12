import { SET_NAME_FIELD } from './constants';

const initialState = {
    nameField: ''
}

export const setName = (state=initialState, action={}) => {
    switch(action.type) {
        case SET_NAME_FIELD:
            return Object.assign({}, state, {nameField: action.payload})
        default: 
            return state;
    }
}