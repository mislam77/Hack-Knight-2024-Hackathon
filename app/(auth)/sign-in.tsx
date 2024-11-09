import { useState } from "react";
import { Text, ScrollView, View, Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../FirebaseConfig"; // Import your Firebase setup
import { signInWithEmailAndPassword } from "firebase/auth";
import ReusableButton from "@/components/ReusableButton";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { images } from "@/constants";

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
    // <LinearGradient
    //     // Background Linear Gradient
    //     colors={['#9EE37D', '#358600']}
    //     className="absolute h-full left-0 right-0 bottom-0 top-0"
    //   >
    <SafeAreaView className="h-full w-full">
      <ScrollView>
      <View className="w-full h-[75vh] px-3-relative">
        <Image source={images.contactbg} resizeMode="contain" className="w-[100vw] h-[40vh]"/>
        <View className="justify-center min-h-[60vh] my-6 
        w-[85vw] bg-white absolute 
                top-1/4 left-8 rounded-xl px-5 py-2 shadow">
          <Text className="font-poplight text-4xl">Log in</Text>

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
          <Link href="/" className="font-popmedium text-fontlight mt-2 text-medium">
            Forgot Password
          </Link>

          {/* Sign In Button */}
          <ReusableButton
            title="Sign In"
            handlePress={handleSignIn}
            containerStyles="bg-complementary mt-7"
            textStyles="text-white text-xl"
            isLoading={isLoading}
          />

          {/* Sign Up Link */}
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-popregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-popsemibold text-complementary">
              Sign Up
            </Link>
          </View>
        </View>
        </View>
        </ScrollView>
    </SafeAreaView>
    // </LinearGradient>
  );
};

export default SignIn;