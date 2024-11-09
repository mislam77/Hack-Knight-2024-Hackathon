import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera/legacy';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import { Aperture, Circle } from 'lucide-react-native';

const Scan = () => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [cameraRef, setCameraRef] = useState<Camera | null>(null);
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            const locationStatus = await Location.requestForegroundPermissionsAsync();
            setHasPermission(status === 'granted' && locationStatus.status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            const location = await Location.getCurrentPositionAsync({});
    
            console.log('Location:', location); // Debugging log
            console.log('Photo URI:', photo.uri); // Log the photo URI
    
            // Decompose the location object into individual fields
            const { latitude, longitude } = location.coords;
            const { timestamp } = location;
    
            // Navigate and pass only the required fields
            router.push({
                pathname: '/results',
                params: {
                    photoUri: photo.uri,
                    latitude,
                    longitude,
                    timestamp,
                },
            });
        }
    };    

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera or location</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={CameraType.back as any} ref={ref => setCameraRef(ref)}>
                <View style={styles.buttonContainer}>
                    {/* <Button title="Take a Picture" onPress={takePicture} />
                    <Circle size={70} strokeWidth={1} color="#fff"/> */}
                    <TouchableOpacity 
                    className={`rounded-xl min-h-[60px] justify-center 
                        items-center absolute bottom-[7rem] right-[35vw]`}
                    onPress={takePicture}
                    activeOpacity={0.5}
                    >
                        {/* <Circle size={80} strokeWidth={0.7} color="#fff" />. */}
                        <Aperture size={80} strokeWidth={0.7} color="#fff" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>

        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        position: 'relative'
    },
});

export default Scan;