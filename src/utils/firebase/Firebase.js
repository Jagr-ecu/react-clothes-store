// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithPopup, 
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    updateDoc,
    deleteField
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

//obtiene autenticacion de las cuentas
export const auth = getAuth()
//inicio de sesion con google con ventana emergente
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
//inicio de sesion con google con cambio de pestaña y redireccion
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

//obtiene instancia de bd
export const db = getFirestore()

//guarda de SHOP_DATA.js los objetos en firebase, solo se lo usa una vez
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log('coleccion añadida')
}

export const getCategoriesAndDocumemtns = async() => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})

    return categoryMap
}

/*
{
    hats :{
        title: 'hats',
        items: [
            {},
            {}
        ]
    },
    sneakers: {
        title: 'Sneakers',
        items: [
            {},
            {}
        ]
    }
}
 */

//crea un documento del usuario registrado, ya sea por google o por email, 
//en caso de email se agrega informacion adicional que es el nombre de usuario
//en caso de que el usuario ya exista no crea uno nuevo y retorna el usuario que ya esta registrado
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

//crea un usuario con email y contraseña
export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}
   
//inicia sesion con email y contraseña
export const signInAuthUserWithEmailAndPassword = async ( email, password ) => {
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

//cierra sesion de usuario
export const signOutUser = async() => await signOut(auth)

//verifica si hay una sesion de usuario, sino retorna null
export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback)