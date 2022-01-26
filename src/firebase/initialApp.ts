import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import config from './config';

/* eslint-disable no-unused-vars */
const app = initializeApp(config);
/* eslint-disable no-unused-vars */
const dataBase = getFirestore(app);
export default dataBase;