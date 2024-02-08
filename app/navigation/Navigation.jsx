import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'

import { useAuth } from '../hooks/userAuth'
import { BottomMenu } from '../components/ui/layout/bottom-menu/BottomMenu'
import { PrivateNavigation } from './PrivateNavigation'

export const Navigation = () => {
  const { user } = useAuth()

  const [currentRoute, setCurrentRoute] = useState(undefined)

  const navRef = useNavigationContainerRef()

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name)

    const listener = navRef.addListener('state', ()  => setCurrentRoute(navRef.getCurrentRoute()?.name))

    return () => {
      navRef.removeListener('state', listener)
    }
  }, [])

  return (
    <> 
    <NavigationContainer ref={navRef}>
      <PrivateNavigation />
    </NavigationContainer>
      {user && currentRoute &&
        (<BottomMenu nav={navRef.navigate} currentRoute={currentRoute}/>)
      }
    </>
  )
}
