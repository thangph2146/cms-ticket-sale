import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { ActionModal } from '../actions/index';

export const modalManagerOpen = () => {
    return (dispatch: Dispatch<ActionModal>) => {
        dispatch({
            type: ActionType.MODAL_MANAGER_OPEN,
        });
    };
};

export const modalManagerClose = () => {
    return (dispatch: Dispatch<ActionModal>) => {
        dispatch({
            type: ActionType.MODAL_MANAGER_CLOSE,
        });
    };
};
//===============================================
export const modalSettingOpen = () => {
    return (dispatch: Dispatch<ActionModal>) => {
        dispatch({
            type: ActionType.MODAL_SETTING_OPEN,
        });
    };
};

export const modalSettingClose = () => {
    return (dispatch: Dispatch<ActionModal>) => {
        dispatch({
            type: ActionType.MODAL_SETTING_CLOSE,
        });
    };
};

export const modalManagerData = (data: any) => {
    return (dispatch: Dispatch<ActionModal>) => {
        dispatch({
            type: ActionType.MODAL_MANAGER_DATA,
            payload: data,
        });
    };
};
