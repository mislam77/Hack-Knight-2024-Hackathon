import { Image, Text, View, ImageBackground  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { images } from "@/constants"
import ReusableButton from '@/components/ReusableButton';

const Welcome = () => {
    //const[]
    return (
    //     <ImageBackground
    //     source={images.QC_campus} 
    //     className="flex-1"
    //     resizeMode="contain"
    // >
        <SafeAreaView className="flex-1 justify-center items-center ">
            <Image source={images.logo} className="w-[20rem] h-[16rem] mt-5" resizeMode="contain"/>
            <View className="mt-1">
                <Text className="text-center text-2xl font-semibold text-green-800">
                    Welcome to EcoFriend.ly!
                </Text>
            </View>
            
            <View className="flex-1 justify-end w-full px-5 mb-10">
                <ReusableButton 
                        title="Get Started" 
                        handlePress={() => {router.push("/sign-in")}} 
                        containerStyles='bg-primary mt-7'
                        textStyles="text-white text-2xl"
                        isLoading={undefined} 
                />
            </View>
            <Link href="../(root)/(tabs)/home">Home</Link>
        </SafeAreaView>
        // </ImageBackground>
    );
};

export default Welcome;