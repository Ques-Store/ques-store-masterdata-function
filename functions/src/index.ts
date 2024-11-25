import * as functions from 'firebase-functions';
import { app } from './server';

export const masterdataApi = functions.https.onRequest(app);
