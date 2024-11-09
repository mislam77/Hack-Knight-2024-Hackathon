import React from 'react';
import { View, Text, Image } from 'react-native';

const LeaderboardEntry = ({ userImage, username, points }) => {
    return (
        <View className="w-full min-h-16 px-6 bg-complementary rounded-2xl items-center 
        border-2 border-gray-300 flex-row justify-between">
            {/* User Image */}
            {/* <Image
                source={{ uri: userImage }}
                className="w-12 h-12 rounded-full"
                resizeMode="cover"
            /> */}
            
            
            {/* Username */}
            <Text className="text-lg font-popmedium text-white">
                {username}
            </Text>
            
            {/* Points */}
            <Text className="text-lg font-popsemibold text-white text-center">
                {points} pts
            </Text>
            
        </View>
    );
};

export default LeaderboardEntry;