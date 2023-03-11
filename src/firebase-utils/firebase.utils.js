import { initializeApp } from 'firebase/app'
import{ getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCS7wzJfuNm2a84Or__JwPWHsftU1cFFGk",
    authDomain: "orangejuice-9eed4.firebaseapp.com",
    projectId: "orangejuice-9eed4",
    storageBucket: "orangejuice-9eed4.appspot.com",
    messagingSenderId: "339878750526",
    appId: "1:339878750526:web:7b97bc11b065265b55246f",
    measurementId: "G-ZBSHJ6WVKB"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect  = () => signInWithRedirect(auth, googleProvider)

  export const db = getFirestore();



  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    if (!objectsToAdd) {
      console.log('objectsToAdd is undefined');
      return;
    }
  
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
  
    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  };
  

  

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'Oj');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      
      acc[title.toLowerCase()] = items; 
      
      return acc; 
    }, {})

    return categoryMap;

  }

  export const createUserDocumentFromAuth = async(userAuth, additionalInfo ={}) =>{
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInfo});
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
