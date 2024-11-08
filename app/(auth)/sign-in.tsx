import { useState } from "react";
import { Text, ScrollView, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../FirebaseConfig"; // Import your Firebase setup
import { signInWithEmailAndPassword } from "firebase/auth";
import ReusableButton from "@/components/ReusableButton";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required!");
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      Alert.alert("Success", "You have signed in successfully!");
      console.log("Signed in as:", userCredential.user);
      
      // Navigate to home or dashboard
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-tertiary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[70vh] px-4 my-6">
          <Text className="font-popbold text-2xl">Welcome!</Text>

          {/* Email Field */}
          <FormField
            title="Email"
            value={email}
            handleText={setEmail}
            otherStyles="mt-7"
          />

          {/* Password Field */}
          <FormField
            title="Password"
            value={password}
            handleText={setPassword}
            otherStyles="mt-7"
          />

          {/* Forgot Password Link */}
          <Link href="/" className="font-popbold text-primary mt-7 text-medium">
            Forgot password
          </Link>

          {/* Sign In Button */}
          <ReusableButton
            title="Sign In"
            handlePress={handleSignIn}
            containerStyles="bg-primary mt-7"
            textStyles="text-white"
            isLoading={isLoading}
          />

          {/* Sign Up Link */}
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-popregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-popsemibold text-primary">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;