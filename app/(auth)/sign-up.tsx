import { useState } from "react";
import { Text, ScrollView, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig"; // Import Firebase Auth instance
import ReusableButton from "@/components/ReusableButton";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required!");
      return;
    }

    setIsLoading(true);
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );

      const user = userCredential.user;
      Alert.alert("Success", `Welcome, ${username || "User"}!`);
      console.log("User created:", user);
      // Optionally navigate to a different screen or save user info
      router.replace("/home");
    } catch (error: any) {
      console.error("Error signing up:", (error as Error).message);
      Alert.alert("Error", (error as Error).message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-tertiary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[70vh] px-4 my-6">
          <Text className="font-popbold text-2xl">Welcome!</Text>
          {/* User input fields */}
          <FormField
            title="Username"
            value={username}
            handleText={setUsername}
            otherStyles="mt-7"
          />

          <FormField
            title="Email"
            value={email}
            handleText={setEmail}
            otherStyles="mt-7"
          />

          <FormField
            title="Password"
            value={password}
            handleText={setPassword}
            otherStyles="mt-7"
          />

          <ReusableButton
            title="Sign Up"
            handlePress={handleSignUp}
            containerStyles="bg-primary mt-7"
            textStyles="text-white"
            isLoading={isLoading}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-popregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg font-popsemibold text-primary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;