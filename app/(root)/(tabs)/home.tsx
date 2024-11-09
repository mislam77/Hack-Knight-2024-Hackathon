//import InfoBox from '@/components/InfoBox';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recycle, MapPin, Coins, Leaf } from 'lucide-react-native';

const Home = () => {
    return (
        <SafeAreaView className="h-full">
            <ScrollView>
                {/* <Text>Hi, username</Text> */}
                <View className="w-full">
                    <Text className="text-center font-popsemibold text-2xl mt-3">Your Impact</Text>
                    <View className="flex-row flex-wrap justify-between gap-5 mt-10 px-5 flex">
                        <View className="bg-blue-200 rounded-xl px-6 items-center py-4">
                            <Recycle color="#63C132" size={28} strokeWidth={2.25}/>
                            <Text
                            className={`text-4xl font-popextrabold mt-5`}
                            >
                                350 kg
                            </Text>
                            <Text className={`text-sm font-popbold`}>Waste Collected</Text>
                        </View>

                        <View className="bg-blue-200 rounded-xl px-6 items-center py-4">
                            <MapPin color="#63C132"/>
                            <Text
                            className={`text-4xl font-popextrabold mt-5`}
                            >
                                4
                            </Text>
                            <Text className={`text-sm font-popbold`}>Reports Submitted</Text>
                        </View>

                        <View className="bg-blue-200 rounded-xl px-6 items-center py-4">
                            <Coins color="#63C132"/>
                            <Text
                            className={`text-4xl font-popextrabold mt-5`}
                            >
                                0
                            </Text>
                            <Text className={`text-sm font-popbold`}>Tokens Earned</Text>
                        </View>

                        <View className="bg-blue-200 rounded-xl px-6 items-center py-4">
                            <Leaf color="#63C132"/>
                            <Text
                            className={`text-4xl font-popextrabold mt-5`}
                            >
                                175 kg
                            </Text>
                            <Text className={`text-sm font-popbold`}>CO2 Offset</Text>
                        </View>
                    </View>
                </View>  
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;