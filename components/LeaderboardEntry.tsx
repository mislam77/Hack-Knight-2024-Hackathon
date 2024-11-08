import React from 'react';
import { View, Text, Image } from 'react-native';

const LeaderboardEntry = ({ userImage, username, points }) => {
    return (
        <View className="w-full h-16 px-4 bg-blue-100 rounded-2xl items-center border-2 border-gray-300 flex-row justify-between">
            {/* User Image */}
            <Image
                source={{ uri: userImage }}
                className="w-12 h-12 rounded-full"
                resizeMode="cover"
            />
            
            {/* Username */}
            <Text className="flex-1 text-lg font-medium text-center ml-4">
                {username}
            </Text>
            
            {/* Points */}
            <Text className="text-lg font-semibold text-right">
                {points} pts
            </Text>
        </View>
    );
};

export default LeaderboardEntry;