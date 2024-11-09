import { getFirestore, doc, getDoc, setDoc, updateDoc, increment, collection, addDoc } from "firebase/firestore";

// Firestore instance
const db = getFirestore();

// Create a new user document or initialize with default metrics
export const createUser = async (userId: string, username: string, email: string) => {
    try {
        await setDoc(doc(db, "users", userId), {
            username,
            email,
            totalWasteCollected: 0, // kg or liters
            totalReportsSubmitted: 0,
            totalPointsEarned: 0,
            totalCO2Offset: 0, // kg
        });
        console.log("User document successfully written!");
    } catch (error) {
        console.error("Error writing user document:", error);
        throw error;
    }
};

// Update user metrics when a new report is submitted
export const updateUserMetrics = async (
    userId: string,
    wasteQuantity: number,
    co2Offset: number
) => {
    try {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            throw new Error("User not found");
        }

        await updateDoc(userRef, {
            totalWasteCollected: increment(wasteQuantity),
            totalReportsSubmitted: increment(1),
            totalPointsEarned: increment(100),
            totalCO2Offset: increment(co2Offset),
        });

        console.log("User metrics updated successfully!");
    } catch (error) {
        console.error("Error updating user metrics:", error);
        throw error;
    }
};

// Add a new submission to the submissions collection
export const addSubmission = async (
    userId: string,
    photoUri: string,
    wasteName: string,
    wasteType: string,
    quantity: string,
    latitude: number,
    longitude: number,
    timestamp: string
) => {
    try {
        const submissionData = {
            userId,
            photoUri,
            wasteName,
            wasteType,
            quantity,
            location: {
                latitude,
                longitude,
            },
            timestamp,
        };

        const submissionRef = await addDoc(collection(db, "submissions"), submissionData);
        console.log("Submission added successfully with ID:", submissionRef.id);
    } catch (error) {
        console.error("Error adding submission:", error);
        throw error;
    }
};

// Get user document by userId
export const getUser = async (userId: string) => {
    try {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            throw new Error("User not found");
        }

        return userDoc.data();
    } catch (error) {
        console.error("Error getting user document:", error);
        throw error;
    }
};