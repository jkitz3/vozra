import * as Splash from 'expo-splash-screen'
import React, { createContext, useEffect, useState } from 'react'
import { Text } from 'react-native'

export const AuthContext = createContext({})

let ignore = Splash.preventAutoHideAsync()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(()=>{
    let isMounted = false
    
    const getUserFromStorage = async () => {
      if(isMounted){

      }

      await Splash.hideAsync()
    }

    let ignore = getUserFromStorage()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
