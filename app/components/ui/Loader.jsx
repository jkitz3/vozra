import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import { AppConstants } from '../../app.constants'

export const Loader = () => {
	return (
		<ActivityIndicator
			color={AppConstants.primary}
			size='large'
		></ActivityIndicator>
	)
}
