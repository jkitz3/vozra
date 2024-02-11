import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	Keyboard,
	Pressable,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'

import { Button, Loader } from '../../'
import { useAuth } from '../../../hooks/userAuth'

import { AuthFields } from './AuthFields'

export const Auth = () => {
	const [isReg, setIsReg] = useState(false)

	const { control, reset, handleSubmit } = useForm({
		mode: 'onChange'
	})

	const { setUser } = useAuth()

	const onSubmit = data => {
		setUser({
			_id: '',
			...data
		})
		reset()
	}

	const isLoading = false

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='items-center justify-center flex-1'>
				<View className='w-3/4'>
					<Text className='text-white text-5xl text-center font-bold mb-5'>
						{isReg ? 'Регистрация' : 'Вход'}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AuthFields control={control} />
							<Button onPress={handleSubmit(onSubmit)}>
								{!isReg ? 'Войти' : 'Создать аккаунт'}
							</Button>
							<Pressable
								onPress={() => setIsReg(!isReg)}
								className='w-22 self-end'
							>
								<Text className='text-white text-opacity-60 text-base mt-5 text-right'>
									{isReg ? 'Вход' : 'Регистрация'}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}
