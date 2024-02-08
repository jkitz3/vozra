import React from 'react'
import { View } from 'react-native'

import { menuData } from './menu.data'
import { MenuItem } from './MenuItem'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const BottomMenu = props => {
  const { bottom } = useSafeAreaInsets()

  return (
    <View 
      className='pt-5 px-3 flex-row justify-between items-center w-full bg-[#242531]'
      style={{
        paddingBottom: bottom + 20
      }}
    >
      {menuData.map(item => (
        <MenuItem item={item} key={item.path} {...props} />
      ))}
    </View>
  )
}
