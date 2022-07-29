import { useState } from 'react'
import { createContext, useContext } from 'react'
import { auth } from '../../firebase-config'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = createContext()

export const useAuth = () =>{
    return useContext(AuthContext)
}

const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()

    const signup = (email, password) =>{
        return auth.createUserWithEmailAndPassword(email, password)
    }
     
    const value = { currentUser}
  return (
    <AuthContext.Provider value={value}>
        Provider
    </AuthContext.Provider>
  )
}

export default AuthProvider