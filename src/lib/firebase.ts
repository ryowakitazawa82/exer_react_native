import firebase from "firebase";
import {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} from "react-native-dotenv";
/* types */
import { Shop } from "../../types/shop";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID,
  };
  firebase.initializeApp(firebaseConfig);
}

export const getShops = async () => {
  const snapshot = await firebase.firestore().collection("shops").orderBy("score", "desc").get();
  const shops = snapshot.docs.map((doc) => doc.data() as Shop);
  return shops;
};
