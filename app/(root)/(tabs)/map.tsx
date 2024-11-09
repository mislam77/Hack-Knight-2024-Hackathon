import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

// Type definitions for dummy data
interface MarkerData {
    id: string;
    latitude: number;
    longitude: number;
    waste: string;
    wasteType: string;
    quantity: string;
    co2Offset: string;
    confidence: number;
}

// Dummy data for markers
const dummyMarkers: MarkerData[] = [
    {
        id: '1',
        latitude: 40.7370,
        longitude: -73.8205,
        waste: 'Combination Lock',
        wasteType: 'Metal, Plastic',
        quantity: '0.2 kg',
        co2Offset: '0.5 kg',
        confidence: 0.8,
    },
    {
        id: '2',
        latitude: 40.7372,
        longitude: -73.8210,
        waste: 'Plastic Bottle',
        wasteType: 'Plastic',
        quantity: '0.1 kg',
        co2Offset: '0.3 kg',
        confidence: 0.9,
    },
    {
        id: '3',
        latitude: 40.7375,
        longitude: -73.8207,
        waste: 'Aluminum Can',
        wasteType: 'Metal',
        quantity: '0.15 kg',
        co2Offset: '0.4 kg',
        confidence: 0.85,
    },
    {
        id: '4',
        latitude: 40.7368,
        longitude: -73.8202,
        waste: 'Glass Bottle',
        wasteType: 'Glass',
        quantity: '0.3 kg',
        co2Offset: '0.7 kg',
        confidence: 0.7,
    },
    {
        id: '5',
        latitude: 40.7366,
        longitude: -73.8206,
        waste: 'Paper Bag',
        wasteType: 'Paper',
        quantity: '0.1 kg',
        co2Offset: '0.2 kg',
        confidence: 0.95,
    },
];

const Map = () => {
    const route = useRoute();
    const { latitude, longitude } = route.params || {}; // Safe destructuring

    // Default coordinates (e.g., Queens College, Flushing, New York)
    const initialLatitude = latitude ? parseFloat(latitude) : 40.7365;
    const initialLongitude = longitude ? parseFloat(longitude) : -73.8203;

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: initialLatitude,
                    longitude: initialLongitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                {/* Initial marker for the given coordinates */}
                <Marker
                    coordinate={{
                        latitude: initialLatitude,
                        longitude: initialLongitude,
                    }}
                    title="Initial Location"
                    description="This is the starting point."
                />

                {/* Dummy markers */}
                {dummyMarkers.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                        }}
                        title={marker.waste}
                        description={`Type: ${marker.wasteType}\nQuantity: ${marker.quantity}\nCO2 Offset: ${marker.co2Offset}\nConfidence: ${marker.confidence}`}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default Map;