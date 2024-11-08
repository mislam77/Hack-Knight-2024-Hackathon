import { Stack } from 'expo-router';

const Layout = () => {

  return (
      <Stack>
        <Stack.Screen name="(tabs)/home" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/leaderboard" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/map" options={{ headerShown: false }} />
      </Stack>
  );
}

export default Layout