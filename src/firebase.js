import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDlt22BttDqiPFR8YetaB64dOEGnjP7J0Y",
  authDomain: "netflix-clone-d2797.firebaseapp.com",
  projectId: "netflix-clone-d2797",
  storageBucket: "netflix-clone-d2797.firebasestorage.app",
  messagingSenderId: "718442384254",
  appId: "1:718442384254:web:cdde3cb6d3fd5695c0012f"
}; 


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth)
    toast.error(error);
}

export {auth,db, login,signup,logout}