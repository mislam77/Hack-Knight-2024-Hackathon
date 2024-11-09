import { useState } from "react";
import { Text, ScrollView, View, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig"; // Import Firebase Auth instance
import ReusableButton from "@/components/ReusableButton";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";
import { createUser } from "../../services/firestoreService";
import { images } from "@/constants";

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

      // Save user data in Firestore
      await createUser(user.uid, username, email);

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
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[70vh] px-6 my-6 relative">
          <View className="flex flex-row items-start">
            <Image source={images.signinbg} resizeMode="contain" className="w-full h-[10vh]"/>
          </View>
          <Text className="font-poplight text-4xl">Welcome!</Text>
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
            containerStyles="bg-complementary mt-7"
            textStyles="text-white text-xl"
            isLoading={isLoading}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-popregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg font-popsemibold text-complementary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;