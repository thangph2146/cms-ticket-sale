import { ActionType } from '../action-types/index';
import { Action } from '../actions';

const initialState: object = [];

const reducer = (state: object = initialState, action: Action): object => {
    switch (action.type) {
        case ActionType.FETCH_FIREBASE:
            return state;
        case ActionType.FETCH_FIREBASE_SUCCESS: {
            return action.payload;
        }

        case ActionType.FETCH_FIREBASE_DEFAULT:
            return state;
        default:
            return state;
    }
};

export default reducer;