import { Image, Text, View, ImageBackground  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { images } from "@/constants"
import ReusableButton from '@/components/ReusableButton';

const Welcome = () => {
    //const[]
    return (
        <ImageBackground
        source={images.QC_campus} 
        className="flex-1"
        resizeMode="cover"
    >
        <SafeAreaView className="flex-1 justify-center items-center ">
            <Image source={images.logo} className="w-21 h-20 mb-20" resizeMode="contain"/>
            <View className="bg-gray-300/75 p-1 rounded-lg">
                <Text className="text-center text-xl font-semibold text-green-800">
                    Welcome to CUNY Trash it
                </Text>
            </View>
            
            <View className="flex-1 justify-end w-full px-5 mb-10">
                <ReusableButton 
                        title="Get Started" 
                        handlePress={() => {router.push("/sign-in")}} 
                        containerStyles='bg-primary mt-7'
                        textStyles="text-white"
                        isLoading={undefined} 
                />
            </View>
            <Link href="../(root)/(tabs)/home">Home</Link>
        </SafeAreaView>
        </ImageBackground>
    );
};

export default Welcome;