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
            <Image source={images.logo} className="w-[20rem] h-[16rem] -mt-5" resizeMode="contain"/>
            <Image source={images.welcomebg} className="w-[75vw] h-[30vh] -mt-8" resizeMode="contain"/>
            <View className="mt-4">
                <Text className="text-center text-3xl font-popregular px-4">
                    Welcome to Ecofriend.ly!
                </Text>
                <Text className="text-center text-base font-popsemilbold px-4 mt-3">
                    Easily report litter by snapping a photo and let our AI identify the waste and its location
                </Text>
            </View>
            
            <View className="flex-1 w-full h-[10vh] px-5 mt-10">
                <ReusableButton 
                        title="Get Started" 
                        handlePress={() => {router.push("/sign-in")}} 
                        containerStyles='bg-complementary mt-7'
                        textStyles="text-white text-2xl"
                        isLoading={undefined} 
                />
            </View>
            {/* <Link href="../(root)/(tabs)/home">Home (Delete/Comment Later)</Link> */}
        </SafeAreaView>
        // </ImageBackground>
    );
};

export default Welcome;