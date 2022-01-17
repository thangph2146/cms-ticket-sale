import { ActionType } from '../action-types/index';

interface FetchFirebase {
    type: ActionType.FETCH_FIREBASE;
}

interface FetchFirebaseSuccess {
    type: ActionType.FETCH_FIREBASE_SUCCESS;
    payload: object;
}

interface FetchFirebaseFault {
    type: ActionType.FETCH_FIREBASE_DEFAULT;
}

export type Action = FetchFirebase | FetchFirebaseSuccess | FetchFirebaseFault;