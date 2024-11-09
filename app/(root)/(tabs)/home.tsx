import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recycle, MapPin, Coins, Leaf } from 'lucide-react-native';
import { images } from "@/constants";
import { getUser } from "@/services/firestoreService";
import { FIREBASE_AUTH, FIREBASE_DB } from '@/FirebaseConfig';
import { doc, onSnapshot } from 'firebase/firestore';

const Home = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userId = FIREBASE_AUTH.currentUser?.uid; // Get the userId from Firebase Auth
        if (!userId) {
            setError("No user found!");
            setLoading(false);
            return;
        }

        // Real-time listener for user data
        const userRef = doc(FIREBASE_DB, "users", userId);
        const unsubscribe = onSnapshot(userRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                setUserData(docSnapshot.data());
                setLoading(false);
            } else {
                setError("User data not found!");
                setLoading(false);
            }
        }, (err) => {
            console.error("Error getting user data:", err);
            setError(err.message);
            setLoading(false);
        });

        // Cleanup on component unmount
        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <SafeAreaView className="h-full flex items-center justify-center">
                <ActivityIndicator size="large" color="#609670" />
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView className="h-full flex items-center justify-center">
                <Text className="text-red-500">{error}</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="h-full w-full">
            <ScrollView>
                <Text className="text-center font-poplight text-xl mt-3">
                    Hi, {userData?.username || "User"}
                </Text>
                <View className="w-full">
                    <Text className="text-center font-popsemibold text-2xl mt-3">
                        Your Impact
                    </Text>
                    <View className="flex-row flex-wrap justify-around gap-5 mt-10 px-5">
                        <View className="bg-seccomplementary rounded-xl px-6 items-center py-4 grow border-2 border-brown-300">
                            <Recycle color="#609670" size={28} strokeWidth={2.25} />
                            <Text className="text-4xl font-popextrabold mt-5">
                                {(userData?.totalWasteCollected || 0).toFixed(1)} kg
                            </Text>
                            <Text className="text-sm font-popbold">Waste Collected</Text>
                        </View>
                        <View className="bg-seccomplementary rounded-xl px-6 items-center py-4 grow border-2 border-brown-300">
                            <MapPin color="#609670" size={28} strokeWidth={2.25} />
                            <Text className="text-4xl font-popextrabold mt-5">
                                {userData?.totalReportsSubmitted || 0}
                            </Text>
                            <Text className="text-sm font-popbold">Reports Submitted</Text>
                        </View>
                        <View className="bg-seccomplementary rounded-xl px-6 items-center py-4 grow border-2 border-brown-300">
                            <Coins color="#609670" size={28} strokeWidth={2.25} />
                            <Text className="text-4xl font-popextrabold mt-5">
                                {userData?.totalPointsEarned || 0}
                            </Text>
                            <Text className="text-sm font-popbold">Tokens Earned</Text>
                        </View>
                        <View className="bg-seccomplementary rounded-xl px-6 items-center py-4 grow border-2 border-brown-300">
                            <Leaf color="#609670" size={28} strokeWidth={2.25} />
                            <Text className="text-4xl font-popextrabold mt-5">
                                {(userData?.totalCO2Offset || 0 ).toFixed(1) } kg
                            </Text>
                            <Text className="text-sm font-popbold">CO2 Offset</Text>
                        </View>
                    </View>
                    <View className="relative">
                    <Text className="text-center mt-4 text-lg font-poplight p-3">Thank you so much for making the world a better place</Text>
                    {/* <Image
                            source={images.homepageimg}
                            resizeMode="contain"
                            className="w-[50vw] -mt-[100vh]"
                    /> */}
                    <View className='justify-center items-center'>
                        <Image
                            source={images.homepageimg}
                            resizeMode="contain"
                            className="w-[80vw] -mt-[108vh]"
                        />
                    </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;