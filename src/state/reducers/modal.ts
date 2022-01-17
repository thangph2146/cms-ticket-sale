import { ActionType } from '../action-types/index';
import { ActionModal } from '../actions';

const initialState: object = {
    isModalManager: false,
    isModalSetting: false,
    modalManagerData: {},
    isModal: false,
};

const reducer = (state: object = initialState, action: ActionModal): object => {
    switch (action.type) {
        case ActionType.MODAL_MANAGER_OPEN: {
            const modal = {
                ...state,
                isModalManager: true,
            };
            return modal;
        }

        case ActionType.MODAL_MANAGER_CLOSE: {
            const modal = {
                ...state,
                isModalManager: false,
            };
            return modal;
        }
        case ActionType.MODAL_SETTING_OPEN: {
            const modal = {
                ...state,
                isModalSetting: true,
            };
            return modal;
        }

        case ActionType.MODAL_SETTING_CLOSE: {
            const modal = {
                ...state,
                isModalSetting: false,
            };
            return modal;
        }

        case ActionType.MODAL_MANAGER_DATA: {
            const payload = action.payload;
            const modal = {
                ...state,
                modalManagerData: payload,
            };
            return modal;
        }

        default:
            return state;
    }
};

export default reducer;
