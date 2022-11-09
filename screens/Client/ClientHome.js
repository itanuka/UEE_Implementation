import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect } from "react";
import { db } from "../../Firebase/Firebase-config";
import {
  collection,
  getDocs,
  updateDoc,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function ClientHome({ route }) {
  const { worker_data } = route.params;
  const navigation = useNavigation();
  const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const deleteUser = async (id) => {
    try {
      const UserDoc = doc(db, "RegisteredUser", id);
      await deleteDoc(UserDoc);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    ToastAndroid.show("successfully Deleted!", ToastAndroid.SHORT);
    navigation.navigate("Sign In");
    forceUpdate();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          left: "15%",
        }}
      >
        <Text style={{ fontSize: 20 }}>Name: {worker_data.username}</Text>
        <Text style={{ fontSize: 20 }}>Email: {worker_data.email}</Text>
        <Text style={{ fontSize: 20 }}>
          Phone Number: {worker_data.phoneNumber}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            marginTop: 35,
            backgroundColor: "#F44336",
            width: "50%",
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={() => deleteUser(worker_data.uid)}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "#00E676",
            width: "50%",
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate("Update user", { worker_data })}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
