import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LeaderboardEntry from '@/components/LeaderboardEntry';

type User = {
    userImage: string;
    username: string;
    points: number;
};

const users: User[] = [
    { userImage: '', username: 'Brandon Ojeda', points: 100 },
    { userImage: '', username: 'John Doe', points: 50 },
    { userImage: '', username: 'Jane Doe', points: 25 },
    // Add more users as needed
];

const getRankedUsers = (users: User[]) => {
    const sortedUsers = [...users].sort((a, b) => b.points - a.points);
    return sortedUsers.map((user, index) => {
        let color;
        if (index === 0) {
            color = '#FFD700'; // Gold for 1st place
        } else if (index === 1) {
            color = '#C0C0C0'; // Silver for 2nd place
        } else if (index === 2) {
            color = '#CD7F32'; // Bronze for 3rd place
        } else {
            color = '#FFFFFF'; // White for all others
        }
        return { ...user, rank: index + 1, color };
    });
};

const Leaderboard = () => {
    const rankedUsers = getRankedUsers(users);

    return (
        <SafeAreaView className="flex-1 bg-green-800 p-4">
            <Text className="text-center text-3xl font-bold text-white mb-6">
                Leaderboard
            </Text>

            {rankedUsers.map((user) => (
                <View key={user.username} className="mb-4">
                    <LeaderboardEntry
                        userImage={user.userImage}
                        username={`${user.rank}. ${user.username}`}
                        points={user.points}
                        
                    />
                </View>
            ))}
        </SafeAreaView>
    );
};

export default Leaderboard;
