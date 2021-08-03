import  firebase from "firebase"
import 'firebase/storage';
import { 
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID
} from '@env';
 
const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID
};

// console.log('apiKey: ' + firebaseConfig.apiKey);
// console.log('authDomain: ' + firebaseConfig.authDomain);
// console.log('projectId: ' + firebaseConfig.projectId);
// console.log('storageBucket: ' + firebaseConfig.storageBucket);
// console.log('messagingSenderId: ' + firebaseConfig.messagingSenderId);
// console.log('appId: ' + firebaseConfig.appId);
// console.log('measurementId: ' + firebaseConfig.measurementId);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore.setLogLevel('debug');
firebase.firestore().settings({ experimentalForceLongPolling: true });
const database = firebase.firestore();

export default database