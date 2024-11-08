import { View, Text, TextInput } from 'react-native'
import React , { useState } from 'react'

const FormField = ({title, value, handleText, otherStyles}) => {
  const [ showPassword, setShowPassword] = useState(false);

  return (
    <View
    className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-xl text-primary font-popmedium`}>{title}</Text>

      <View className={`w-full h-16 px-4 bg-blue rounded-2xl
        items-center border-2 border-black-200 flex-row`}>
        <TextInput
            className="flex-1 text-black font-psemibold justify-center"
            value={value}
            onChangeText={handleText}
            secureTextEntry ={title === "Password" && !showPassword}
        />
      </View>
    </View>
  )
}

export default FormField