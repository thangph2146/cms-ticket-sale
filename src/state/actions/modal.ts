import { ActionType } from '../action-types/index';

interface ModalManagerOpen {
    type: ActionType.MODAL_MANAGER_OPEN;
}

interface ModalManagerClose {
    type: ActionType.MODAL_MANAGER_CLOSE;
}
//========================================
interface ModalSettingOpen {
    type: ActionType.MODAL_SETTING_OPEN;
}

interface ModalSettingClose {
    type: ActionType.MODAL_SETTING_CLOSE;
}
//==================================================
interface ModalManagerData {
    type: ActionType.MODAL_MANAGER_DATA;
    payload: object;
}

export type ActionModal =
    | ModalManagerOpen
    | ModalManagerClose
    | ModalSettingOpen
    | ModalSettingClose
    | ModalManagerData;
