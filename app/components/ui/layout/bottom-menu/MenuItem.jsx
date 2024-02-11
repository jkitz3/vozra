import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Pressable } from 'react-native'

import { AppConstants } from '../../../../app.constants'

export const MenuItem = ({ currentRoute, nav, item }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable
			className='w-[24%] items-center'
			style={
				isActive
					? {
							shadowColor: AppConstants.primary,
							shadowOffset: {
								width: 0,
								height: 3
							},
							shadowOpacity: 0.7,
							shadowRadius: 20,
							elevation: 20
						}
					: {}
			}
			onPress={() => nav(item.path)}
		>
			<AntDesign
				name={item.iconName}
				size={26}
				color={isActive ? AppConstants.primary : '#b6b7c8'}
			/>
		</Pressable>
	)
}
