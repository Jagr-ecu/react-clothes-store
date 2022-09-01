// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithPopup, 
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBavTEaeiEJw2odggAU7zX6GM82fNdRgtM",//no importa ocular apikey de firebase
    authDomain: "clothes-store-db-d93b0.firebaseapp.com",
    projectId: "clothes-store-db-d93b0",
    storageBucket: "clothes-store-db-d93b0.appspot.com",
    messagingSenderId: "351058130777",
    appId: "1:351058130777:web:dad7db5bd715d0403f7e48"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    if(!userAuth) return

   const userDocRef = doc(db, 'users', userAuth.uid)

   const userSnapshot = await getDoc(userDocRef)
    
   //si usuario no existe
    //se crea/establece el documento con la data de userAuth
   if(!userSnapshot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        })
    }catch (error){
        console.log('Error creando documento de usuario: ', error)
    }
   }

   return userDocRef
}

export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}
   
export const signInAuthUserWithEmailAndPassword = async ( email, password ) => {
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}
