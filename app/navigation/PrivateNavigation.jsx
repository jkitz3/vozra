import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Auth } from '../components'
import { useAuth } from '../hooks/userAuth'

import { routes } from './routes'

const Stack = createNativeStackNavigator()

export const PrivateNavigation = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#1E1C2E'
				}
			}}
		>
			{user ? (
				routes.map(route => <Stack.Screen key={route.name} {...route} />)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}
