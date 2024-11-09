import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const ReusableButton = ({title, handlePress, containerStyles, textStyles, isLoading} ) => {
  return (
    <TouchableOpacity 
    className={`rounded-xl min-h-[60px] justify-center items-center ${containerStyles}`}
    onPress={handlePress}
    activeOpacity={0.7}
    >
        <Text className={`font-popsemibold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ReusableButton;