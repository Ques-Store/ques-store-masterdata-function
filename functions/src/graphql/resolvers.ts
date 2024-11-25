import { db } from '../config/firebaseConfig';

export const resolvers = {
  masterData: async () => {
    const snapshot = await db.collection('masterdata').get();

    const data: Record<string, any> = {};
    snapshot.forEach(doc => (data[doc.id] = doc.data()));

    return { data };
  },
};
