import { combineReducers } from 'redux';
import fetchDataFirebase from './fetchDataFirebase';
import modal from './modal';

const reducers = combineReducers({
    dataFirebase: fetchDataFirebase,
    modal,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;