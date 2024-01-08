// useFirestore.js

import { useEffect,useMemo } from "react";
import { getFirestore, collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

export const useFirestore = (onDataUpdate) => {
  useEffect(() => {
    const dbFS = getFirestore();
    const pokerPlanningCollection = collection(dbFS, "PockerPlanning");
    const unsubscribe = onSnapshot(pokerPlanningCollection, (snapshot) => {
      const updatedData = [];
      snapshot.forEach((doc) => {
        updatedData.push({ id: doc.id, ...doc.data() });
      });
      onDataUpdate(updatedData);
      // Notify players of updates using a pop-up notification (use your preferred notification method).
      // For example, you can use Expo Notifications API.
      // HandleNotifications(updatedData); // Implement HandleNotifications function as needed
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [onDataUpdate]);
};

export const updatePlayerNote = async (playerNumber, newNote) => {
  try {
    const dbFS = getFirestore();
    const pokerPlanningDocRef = doc(dbFS, "PockerPlanning", "WreYcv1uZk4goXRV8yCu");
    // Update the specific player's note field
    const fieldToUpdate = `Player${playerNumber}Note`;
    console.log(playerNumber);
    if (!newNote) {
      console.error("New note is undefined or empty.");
      return;
    }
    const updatedData = { [fieldToUpdate]: newNote };
    await updateDoc(pokerPlanningDocRef, updatedData);
    console.log("Player's note updated successfully!");
  } catch (error) {
    console.error("Error updating player's note:", error);
  }
};
