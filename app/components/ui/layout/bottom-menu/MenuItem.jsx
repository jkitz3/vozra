import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Pressable } from 'react-native'

import { AppConstants } from '../../../../app.constants'

export const MenuItem = ({ currentRoute, nav, item }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable className='w-[24%] items-center' onPress={() => nav(item.path)}>
			<AntDesign
				name={item.iconName}
				size={26}
				color={isActive ? AppConstants.primary : '#b6b7c8'}
			/>
		</Pressable>
	)
}
