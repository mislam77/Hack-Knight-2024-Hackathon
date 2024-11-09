import ReusableButton from '@/components/ReusableButton';
import React, { useState } from 'react';
import { Text, TextInput, Button, SafeAreaView, Keyboard, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Linking } from 'react-native';
import { images } from "@/constants";
import FormField from "@/components/FormField";

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSendEmail = () => {
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        Linking.openURL(mailtoUrl).catch(err => {
            console.error("Failed to open email client:", err);
        });
    };

    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        //     <SafeAreaView style={{ flex: 1, backgroundColor: '#496D6D', padding: 5 }}>
        //         <View style={{ flex: 1, marginTop: 20 }}>
        //             <Text style={{ 
        //                 fontSize: 34, 
        //                 fontWeight: 'bold', 
        //                 color: 'white', 
        //                 textAlign: 'center', 
        //                 marginBottom: 20, 
        //                 textShadowColor: 'rgba(0, 0, 0, 0.75)', // Dark shadow color
        //                 textShadowOffset: { width: 2, height: 2 }, // Slight offset for 3D effect
        //                 textShadowRadius: 3 // Blur radius for smoother shadow
        //             }}>
        //                 Contact Page
        //             </Text>
        //             <Text style={{ fontSize: 16, fontWeight: '', color: 'white', textAlign: 'center', marginBottom: 15 }}>
        //             Alert your local sanitation department!
        //             </Text>
        //             <TextInput
        //                 placeholder="Enter email subject"
        //                 placeholderTextColor="#A9A9A9"
        //                 value={subject}
        //                 onChangeText={setSubject}
        //                 style={{
        //                     borderWidth: 1,
        //                     borderColor: '#A9A9A9',
        //                     backgroundColor: '#3C6E71',
        //                     color: 'white',
        //                     padding: 12,
        //                     borderRadius: 10,
        //                     marginBottom: 15,
        //                 }}
        //             />
        //             <TextInput
        //                 placeholder="Enter email body"
        //                 placeholderTextColor="#A9A9A9"
        //                 value={body}
        //                 onChangeText={setBody}
        //                 multiline
        //                 style={{
        //                     borderWidth: 1,
        //                     borderColor: '#A9A9A9',
        //                     backgroundColor: '#3C6E71',
        //                     color: 'white',
        //                     padding: 12,
        //                     borderRadius: 10,
        //                     height: 120,
        //                     marginBottom: 20,
        //                 }}
        //             />
        //             {/* <Button title="Draft Email" onPress={handleSendEmail} color="#0000EE" /> */}
        //             <ReusableButton title="Draft Email " 
        //             handlePress={handleSendEmail} 
        //             containerStyles="bg-complementary mt-7"
        //             textStyles="text-white text-xl"
        //             isLoading={undefined}
        //             />
        //         </View>
        //     </SafeAreaView>
        // </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} className="w-full h-full">
            <SafeAreaView className="h-full">
            <View className="w-full h-[75vh] p-3 relative">
                <Image source={images.contactbg} resizeMode="contain" className="w-full h-[50vh]"/>
                <View className="w-[85vw] h-[50vh] bg-white absolute 
                bottom-0 left-8 rounded-xl px-5 py-2 shadow">
                <Text className="mt-7 text-2xl font-poplight text-fontlight">Alert your local sanitation department!</Text>
                <TextInput 
                value={subject}
                placeholderTextColor="#A9A9A9"
                placeholder="Enter email subject"
                className="mt-7 border-2 rounded-lg py-2 px-3 border-black-200"
                onChangeText={(newText) => {
                    setSubject(newText)
                }}
                />
                <TextInput 
                value={body}
                placeholderTextColor="#A9A9A9"
                placeholder="Enter email body"
                className="mt-7 border-2 rounded-lg pt-2 px-3 pb-20 border-black-200"
                onChangeText={(newText) => {
                    setBody(newText)
                }}
                />
                <View className="px-12">
                <ReusableButton title="Draft Email " 
                handlePress={handleSendEmail} 
                containerStyles="bg-complementary mt-12"
                textStyles="text-white text-xl font-popregular"
                isLoading={undefined}
                />
                </View>
                </View>
            </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Contact;
