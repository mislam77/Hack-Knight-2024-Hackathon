//import InfoBox from '@/components/InfoBox';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recycle, MapPin, Coins, Leaf } from 'lucide-react-native';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Hi, username</Text>
                <View>
                    <Text>Your Impact</Text>
                    <View className="flex-1 flex-row gap-5 max-w-[85vh]">
                    <View className="bg-yellow">
                        <Recycle color="#63C132"/>
                        <Text
                        className={`text-xl font-popextrabold`}
                        >
                         350 kg
                        </Text>
                        <Text className={`text-sm font-popbold`}>Wastes Collected</Text>
                    </View>

                    <View className="bg-yellow">
                        <MapPin color="#63C132"/>
                        <Text
                        className={`text-xl font-popextrabold`}
                        >
                         4
                        </Text>
                        <Text className={`text-sm font-popbold`}>Reports Submitted</Text>
                    </View>

                    <View className="bg-yellow">
                        <Coins color="#63C132"/>
                        <Text
                        className={`text-xl font-popextrabold`}
                        >
                         0
                        </Text>
                        <Text className={`text-sm font-popbold`}>Tokens Earned</Text>
                    </View>

                    <View className="bg-yellow">
                        <Leaf color="#63C132"/>
                        <Text
                        className={`text-xl font-popextrabold`}
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