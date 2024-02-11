import React from 'react'
import { Platform, SafeAreaView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Layout = ({ title, children }) => {
	const { top } = useSafeAreaInsets()

	return (
		<SafeAreaView className='flex-1'>
			<View
				className='flex-1 px-6'
				style={{
					paddingTop: Platform.OS === 'ios' ? top / 5 : top * 1.6
				}}
			>
				{title && (
					<Text className='text-3xl font-semibold text-center text-white'>
						{title}
					</Text>
				)}
				<View className='flex-1'>{children}</View>
			</View>
		</SafeAreaView>
	)
}
