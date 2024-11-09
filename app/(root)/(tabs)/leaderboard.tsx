import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB } from '@/FirebaseConfig';
import LeaderboardEntry from '@/components/LeaderboardEntry';

const Leaderboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the users data in real-time from Firestore
        const fetchUsers = () => {
            try {
                const usersCollection = collection(FIREBASE_DB, "users");
                const q = query(usersCollection, orderBy("totalPointsEarned", "desc")); // Order by points descending
                
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const usersData = querySnapshot.docs.map((doc) => ({
                        userImage: doc.data().userImage || '', // Placeholder for user image if exists
                        username: doc.data().username,
                        points: doc.data().totalPointsEarned,
                    }));

                    setUsers(usersData);
                    setLoading(false);
                });

                // Cleanup on unmount
                return () => unsubscribe();
            } catch (error) {
                setError("Error fetching leaderboard data.");
                setLoading(false);
                console.error("Error fetching leaderboard data:", error);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <SafeAreaView className="flex-1 bg-green-800 p-4">
                <ActivityIndicator size="large" color="#FFFFFF" />
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView className="flex-1 bg-green-800 p-4">
                <Text className="text-center text-white">{error}</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 p-4">
            <Text className="text-center text-3xl font-poplight text-fontlight mb-6">
                Rankings
            </Text>

            {users.map((user, index) => (
                <View key={user.username} className="mb-4">
                    <LeaderboardEntry
                        userImage={user.userImage}
                        username={`${index + 1}. ${user.username}`}
                        points={user.points}
                    />
                </View>
            ))}
        </SafeAreaView>
    );
};

export default Leaderboard;