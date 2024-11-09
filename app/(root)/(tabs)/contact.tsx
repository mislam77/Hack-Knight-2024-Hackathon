import React, { useState } from 'react';
import { Text, TextInput, Button, SafeAreaView, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Linking } from 'react-native';

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#496D6D', padding: 20 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ 
                        fontSize: 28, 
                        fontWeight: 'bold', 
                        color: 'white', 
                        textAlign: 'center', 
                        marginBottom: 20, 
                        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Dark shadow color
                        textShadowOffset: { width: 2, height: 2 }, // Slight offset for 3D effect
                        textShadowRadius: 3 // Blur radius for smoother shadow
                    }}>
                        Contact Page
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: '', color: 'white', textAlign: 'center', marginBottom: 15 }}>
                    ♻️Alert your local sanitation department!♻️
                    </Text>
                    <TextInput
                        placeholder="Enter email subject"
                        placeholderTextColor="#A9A9A9"
                        value={subject}
                        onChangeText={setSubject}
                        style={{
                            borderWidth: 1,
                            borderColor: '#A9A9A9',
                            backgroundColor: '#3C6E71',
                            color: 'white',
                            padding: 12,
                            borderRadius: 10,
                            marginBottom: 15,
                        }}
                    />
                    <TextInput
                        placeholder="Enter email body"
                        placeholderTextColor="#A9A9A9"
                        value={body}
                        onChangeText={setBody}
                        multiline
                        style={{
                            borderWidth: 1,
                            borderColor: '#A9A9A9',
                            backgroundColor: '#3C6E71',
                            color: 'white',
                            padding: 12,
                            borderRadius: 10,
                            height: 120,
                            marginBottom: 20,
                        }}
                    />
                    <Button title="Draft Email" onPress={handleSendEmail} color="#0000EE" />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Contact;
