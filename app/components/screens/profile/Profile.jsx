import React from 'react'

import { Button, Layout } from '../../'
import { useAuth } from '../../../hooks/userAuth'

export const Profile = () => {
	const { setUser } = useAuth()

	return (
		<Layout title='Профиль'>
			<Button onPress={() => setUser(null)}>Выйти</Button>
		</Layout>
	)
}
