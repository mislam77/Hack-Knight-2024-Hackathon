import { House, Mail , Trophy, Map, Scan } from 'lucide-react-native';
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#609670',
          borderRadius: 30,
          paddingBottom: 0, // ios only
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({focused }) => (
            <View className={`items-center justify-center gap-2 w-20 h-24`}>
              <House color="#e5e7eb"/>
              <Text
              className={`${focused ? "font-popsemibold" : "font-popregular"} text-xs text-white`}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className={`items-center justify-center gap-2 w-20 h-24`}>
              <Mail color="#e5e7eb" />
              <Text
              className={`${focused ? "font-popsemibold" : "font-popregular"} text-xs text-white`}>
                Contact
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className={`items-center justify-center gap-2 w-20 h-24`}>
              <Scan color="#e5e7eb" />
              <Text
              className={`${focused ? "font-popsemibold" : "font-popregular"} text-xs text-white`}>
                Camera
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className={`items-center justify-center gap-2 w-20 h-24`}>
              <Trophy color="#e5e7eb" />
              <Text
              className={`${focused ? "font-popsemibold" : "font-popregular"} text-xs text-white`}>
                Leaderboard
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className={`items-center justify-center gap-2 w-20 h-24`}>
              <Map color="#e5e7eb" />
              <Text
              className={`${focused ? "font-popsemibold" : "font-popregular"} text-xs text-white`}>
                Map
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}