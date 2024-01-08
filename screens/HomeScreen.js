// HomeScreen.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import signoutService from "../services/signoutService";
import { useFirestore, updatePlayerNote } from "../hooks/useFirestore";
import Header from "../components/Header";
import MiddleSection from "../components/MiddleSection";
import GlobalView from "../components/GlobalView";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Modal from "react-native-modal";
import { globalStyles } from "../styles/globalStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useKeyboardHandling from "../hooks/useKeyboardHandling";

export default function HomeScreen() {
  const [newNote, setNewNote] = useState("");
  const [playerNotes, setPlayerNotes] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const keyboardStatus = useKeyboardHandling();
  const signoutFunctions = signoutService();

  const handleNoteUpdate = () => {
    if (selectedCard !== null) {
      console.log(selectedCard);
      updatePlayerNote(selectedCard, newNote);
      setNewNote(null);
      setModalVisible(false);
    }
  };

  // Hook to listen for changes in Player notes
  useFirestore((data) => {
    setPlayerNotes(data);
  });

  const handleSignOut = () => {
    try {
      signoutFunctions.signout();
    } catch (error) {
      console.log("Error during sign-out:", error);
    }
  };

  const renderPlayerNote = (playerIndex, playerNote) => {
    return (
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => playerNote === "" && handleCardPress(playerIndex)}
        >
          {playerNote === "" ? (
            <Ionicons name="cafe" size={30} color="#0185da" />
          ) : (
            <>
              <Text style={styles.cardText}>Note: {playerNote}</Text>
            </>
          )}
        </TouchableOpacity>
        <Text style={styles.playerNumber}> Player {playerIndex}</Text>
      </View>
    );
  };

  const handleCardPress = (index) => {
    setSelectedCard(index);
    setModalVisible(true);
  };

  return (
    <GlobalView>
      {/* Login Header */}
      <Header />
      {/* Login Title */}
      <MiddleSection
        style={{ flex: 0.2, paddingBottom: 40 }}
        title="Collaboration Notes"
      />
      <Footer>
        <View style={styles.cardContainer}>
          {renderPlayerNote(1, playerNotes[0]?.Player1Note)}
          {renderPlayerNote(2, playerNotes[0]?.Player2Note)}
          {renderPlayerNote(3, playerNotes[0]?.Player3Note)}
          {renderPlayerNote(4, playerNotes[0]?.Player4Note)}
          {renderPlayerNote(5, playerNotes[0]?.Player5Note)}
        </View>

        <Modal
          useNativeDriver={Platform.OS === "android" ? true : false}
          useNativeDriverForBackdrop={Platform.OS === "android" ? true : false}
          transparent={true}
          backdropOpacity={0.8}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            scrollEnabled={keyboardStatus}
            contentContainerStyle={styles.modalContainer}
          >
            <Text style={globalStyles.midTexts}>Add Note here : </Text>
            <TextInput
              style={[
                globalStyles.inputText,
                { alignSelf: "center", marginTop: 7 },
              ]}
              placeholder="Enter new note"
              keyboardType="numeric"
              onChangeText={(text) => setNewNote(text)}
            />
            <Button
              style={{ alignSelf: "center" }}
              onPress={handleNoteUpdate}
              text="Update Note"
            />
            <Button
              style={{
                marginTop: 7,
                backgroundColor: "#B22222",
                alignSelf: "center",
              }}
              text="Close Modal"
              onPress={() => setModalVisible(false)}
            />
          </KeyboardAwareScrollView>
        </Modal>

          <View style={styles.bodyLogout}>
            <Pressable onPress={handleSignOut}>
              <View style={styles.logoutAlign}>
                <Ionicons name="log-out-outline" size={20} color="#B22222" />
                <Text style={styles.textLogout}>logout</Text>
              </View>
            </Pressable>
          </View>
      </Footer>
    </GlobalView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: 70,
    height: 120,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    elevation: 5, // for shadow on Android
    shadowColor: "black", // for shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardText: {
    fontSize: 16,
  },
  playerNumber: {
    fontSize: 14,
    marginTop: 5,
  },
  signOutButton: {
    position: "absolute",
    bottom: 20,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  signOutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 25,
    width: "85%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  bodyLogout: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    position: 'absolute', 
    bottom: 10
  },
  logoutAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLogout: {
    fontFamily: "Poppins-Medium",
    color: "#B22222",
    alignSelf: "center",
    top: 2,
    padding: 6,
  },
});
