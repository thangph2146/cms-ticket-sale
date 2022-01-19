import { ActionType } from '../action-types/index';

interface ModalManagerOpen {
    type: ActionType.MODAL_MANAGER_OPEN;
}

interface ModalManagerClose {
    type: ActionType.MODAL_MANAGER_CLOSE;
}
//========================================
interface ModalSettingOpenAdd {
    type: ActionType.MODAL_SETTING_OPEN_ADD;
}
interface ModalSettingOpenUpdate {
    type: ActionType.MODAL_SETTING_OPEN_UPDATE;
}

interface ModalSettingCloseAdd {
    type: ActionType.MODAL_SETTING_CLOSE_ADD;
}
interface ModalSettingCloseUpdate {
    type: ActionType.MODAL_SETTING_CLOSE_UPDATE;
}
//==================================================
interface ModalManagerData {
    type: ActionType.MODAL_MANAGER_DATA;
    payload: object;
}

export type ActionModal =
    | ModalManagerOpen
    | ModalManagerClose
    | ModalSettingOpenAdd
    | ModalSettingOpenUpdate
    | ModalSettingCloseAdd
    | ModalSettingCloseUpdate
    | ModalManagerData;
