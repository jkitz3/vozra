import cn from 'clsx'
import React from 'react'
import { Pressable, Text } from 'react-native'

export const Button = ({ children, className, ...rest }) => {
	return (
		<Pressable
			className={cn('self-center mt-4 bg-primary py-3 px-8 rounded', className)}
			{...rest}
		>
			<Text className='font-semibold text-white text-xl'>{children}</Text>
		</Pressable>
	)
}
