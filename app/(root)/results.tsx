import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useRoute, useNavigation } from '@react-navigation/native';

type Results = {
    waste: string;
    wasteType: string;
    quantity: string;
    co2Offset: string;
    confidence: number;
};

const ResultsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { photoUri, latitude, longitude, timestamp } = route.params || {};
    const [results, setResults] = useState<Results | null>(null);
    const [loading, setLoading] = useState(true);
    const geminiApiKey = 'AIzaSyDw_IqkX8InhtPcHIUq6AeYFuzOVEHTvyA';

    const formatTimestamp = (timestamp) => {
        if (!timestamp || isNaN(Number(timestamp))) {
            return 'Invalid timestamp';
        }

        const validTimestamp = Math.floor(Number(timestamp));
        const date = new Date(validTimestamp);

        if (isNaN(date.getTime())) {
            return 'Invalid timestamp';
        }

        const options = {
            timeZone: 'America/New_York',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        };

        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const handleNavigateToMap = () => {
        navigation.navigate('map', { latitude, longitude });
    };

    useEffect(() => {
        const processImage = async () => {
            try {
                const genAI = new GoogleGenerativeAI(geminiApiKey);
                const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

                const response = await fetch(photoUri);
                const blob = await response.blob();
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = async () => {
                    if (reader.result && typeof reader.result === 'string') {
                        const base64Data = reader.result.split(',')[1];

                        const imageParts = [
                            {
                                inlineData: {
                                    data: base64Data,
                                    mimeType: blob.type,
                                },
                            },
                        ];
                        const prompt = `You are an expert in waste management and recycling. Analyze this image and provide:
                        1. Identify the waste (Name of the waste), if multiple items, do it like this: Item1, Item2, ...
                        2. The type of waste (e.g., plastic, paper, glass, metal, organic), if multiple items, do it like this, Type1, Type2, ...
                        3. An estimate of the quantity or amount (in kg or liter), if multiple items, calculate total
                        4. An estimate of the CO2 Offset with unit (in kg), if multiple items, calculate total
                        5. Your confidence level in this assessment (as a percentage)

                        Respond in JSON format like this:
                        {
                            "waste": "Identify the waste (Name of the waste)",
                            "wasteType": "type of waste",
                            "quantity": "estimated quantity with unit",
                            "co2Offset": "estimated CO2 Offset with unit",
                            "confidence": confidence level as a number between 0 and 1
                        }

                        No unnecessary characters like curly quotes / unescaped quotes / backticks please. Just pure JSON.
                        `;

                        const result = await model.generateContent([prompt, ...imageParts]);
                        const responseText = await result.response.text();

                        try {
                            const parsedResult = JSON.parse(responseText);
                            setResults(parsedResult);
                        } catch (jsonError) {
                            console.error('Failed to parse JSON response:', responseText);
                        }
                        setLoading(false);
                    }
                };
            } catch (error) {
                console.error('Error processing image:', error);
                setLoading(false);
            }
        };

        processImage();
    }, [photoUri, geminiApiKey]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Processing image...</Text>
            </View>
        );
    }

    if (!results) {
        return (
            <View style={styles.container}>
                <Text>Failed to process image. Please try again.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Item: {results.waste}</Text>
            <Text>Type: {results.wasteType}</Text>
            <Text>Quantity: {results.quantity}</Text>
            <Text>CO2 Offset: {results.co2Offset}</Text>
            <Text>Confidence: {(results.confidence * 100).toFixed(2)}%</Text>
            <Text>Location: {latitude}, {longitude}</Text>
            <Text>Timestamp: {formatTimestamp(timestamp)}</Text>
            <Button title="View on Map" onPress={handleNavigateToMap} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default ResultsScreen;