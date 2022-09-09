import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCEjQDlFr2v23lt7lix7kh5B2yQDuygG84",
  authDomain: "juicygain-bcf8c.firebaseapp.com",
  projectId: "juicygain-bcf8c",
  storageBucket: "juicygain-bcf8c.appspot.com",
  messagingSenderId: "795048651941",
  appId: "1:795048651941:web:a6d551177ca4d25f0e314c",
});

/*initializeApp(firebaseApp);
const app = createApp(App);
app.use(router);
app.mount("#app");*/

let db = getFirestore(firebaseApp);
export default db;

/*import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEjQDlFr2v23lt7lix7kh5B2yQDuygG84",
  authDomain: "juicygain-bcf8c.firebaseapp.com",
  projectId: "juicygain-bcf8c",
  storageBucket: "juicygain-bcf8c.appspot.com",
  messagingSenderId: "795048651941",
  appId: "1:795048651941:web:a6d551177ca4d25f0e314c",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;*/
