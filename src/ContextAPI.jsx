import React, { createContext } from 'react'
import { login,signup,logout } from './firebase'

export const authContext = createContext(null)
const ContextAPI = ({children}) => {
  return (
    <authContext.Provider value={{login,logout,signup}}>
        {children}
    </authContext.Provider>
  )
}

export default ContextAPI