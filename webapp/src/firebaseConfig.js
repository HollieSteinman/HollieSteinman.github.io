import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCt_3ZVd-LeIEowiC3TNnXZf2hXDr28HMo",
  authDomain: "gitpages-52aa2.firebaseapp.com",
  projectId: "gitpages-52aa2",
  storageBucket: "gitpages-52aa2.appspot.com",
  messagingSenderId: "666641201801",
  appId: "1:666641201801:web:8d68ce78f884baebeea458"
};

const app = initializeApp(firebaseConfig);
//self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LemuBYjAAAAADN6h099psfbS3QiGlfCOIGNOY2W'),
  isTokenAutoRefreshEnabled: true
});

const functions = getFunctions(app);
export { app, functions }