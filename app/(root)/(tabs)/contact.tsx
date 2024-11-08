import React, { useState } from 'react';
import { Text, TextInput, Button, SafeAreaView } from 'react-native';
import { Linking } from 'react-native';

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    // Function to handle opening the email client
    const handleSendEmail = () => {
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        Linking.openURL(mailtoUrl).catch(err => {
            console.error("Failed to open email client:", err);
        });
    };

    return (
        <SafeAreaView style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Contact Page</Text>
            <TextInput
                placeholder="Enter email subject"
                value={subject}
                onChangeText={setSubject}
                style={{ borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 8 }}
            />
            <TextInput
                placeholder="Enter email body"
                value={body}
                onChangeText={setBody}
                multiline
                style={{ borderWidth: 1, height: 100, padding: 10, borderRadius: 8, marginBottom: 10 }}
            />
            <Button title="Draft Email" onPress={handleSendEmail} />
        </SafeAreaView>
    );
};

export default Contact;
