import * as admin from 'firebase-admin';
import * as serviceAccount from '../sdk-key/service-account.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const db = admin.firestore();
