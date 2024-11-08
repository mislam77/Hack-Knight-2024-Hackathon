import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LeaderboardEntry from '@/components/LeaderboardEntry';

const Leaderboard = () => {
    return (
        <SafeAreaView>
            <Text>Leaderboard</Text>

                <LeaderboardEntry
                userImage=""
                username="Brandon Ojeda"
                points={100}
                />

                <LeaderboardEntry
                userImage=""
                username="John Doe"
                points={100}
                />

                <LeaderboardEntry
                userImage=""
                username="Jane Doe"
                points={100}
                />
        </SafeAreaView>
    );
};

export default Leaderboard;