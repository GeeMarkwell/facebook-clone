import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAmOPGuzbjqPmgDFyhinhEFECgIFuImxtI',
  authDomain: 'facebook-clone-fe764.firebaseapp.com',
  projectId: 'facebook-clone-fe764',
  storageBucket: 'facebook-clone-fe764.appspot.com',
  messagingSenderId: '551205093555',
  appId: '1:551205093555:web:6900f10e7458fbe388f0c6',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
