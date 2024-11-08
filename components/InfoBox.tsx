import { View, Text } from 'react-native'
import { Recycle, Trophy, Map, Scan } from 'lucide-react-native';
import React from 'react'

const InfoBox = (quantity, description, icon) => {
  return (
    <View className="flex-1">
      <Recycle color="#63C132"/>
      <Text
      className={`text-xl font-popextrabold`}
      >
        {quantity}
      </Text>
      <Text className={`text-sm font-popbold`}>{description}</Text>
    </View>
  )
}

export default InfoBox