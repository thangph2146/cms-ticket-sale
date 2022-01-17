import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';

export const fetchFirebase = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FETCH_FIREBASE,
        });
    };
};

export const fetchFirebaseSuccess = (data: object) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FETCH_FIREBASE_SUCCESS,
            payload: data,
        });
    };
};

export const fetchFirebaseDefault = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FETCH_FIREBASE_DEFAULT,
        });
    };
};