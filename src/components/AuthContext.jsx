
import { createContext, useContext, useEffect, useState} from 'react'
import { auth } from '../firebase';

import { signInWithPopup, 
    GoogleAuthProvider,
    signInWithRedirect, 
    onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export  const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({})
    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
       signInWithPopup(auth, provider)
    }


    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('User', currentUser)
        })
        return() =>{
            unsubscribe();
        }
    }, [])
    


  return (
    <AuthContext.Provider value={{googleSignIn, user}}>
        {children}
    </AuthContext.Provider>
  )
};

export const UserAuth = () => {
    return useContext(AuthContext);
}






















// const[currentUser, setCurrentUser] = useState()
// const[loading, setLoading] = useState(false)

//  function login(googleProvider){
//      return signInWithPopup(auth, googleProvider)

     
//  }

//  useEffect(() => {
//  const unsubscribe = auth.onAuthStateChanged(user => {
//      setCurrentUser(user)

//      setLoading(false)
//      })
//      return unsubscribe
//  }, [])

//  const value = {
//      currentUser,
//      login,
//  }