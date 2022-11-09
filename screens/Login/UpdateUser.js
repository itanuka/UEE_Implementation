import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
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

export default function UpdateUser({ route }) {
  const { worker_data } = route.params;
  const id = worker_data.uid;
  const navigation = useNavigation();
  const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const [data, setData] = useState("");
  const initialState = {
    name: "",
    email: "",
  };

  useEffect(() => {
    const updatemember = async () => {
      try {
        const docRef = await getDoc(doc(db, "RegisteredUser", id));
        setData({ ...docRef.data(), id: docRef.id });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    updatemember();
  }, []);

  const handleChangeText = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const UpdateUser = async () => {
    try {
      await updateDoc(doc(db, "RegisteredUser", id), {
        username: data.username,
        phoneNumber: data.phoneNumber,
      });
      if (updateDoc) {
        ToastAndroid.show("Updated successfully!", ToastAndroid.SHORT);
        navigation.navigate("Client", { worker_data });
      }
    } catch (e) {
      console.error("Error adding document: ", e);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    }
  };

  return (
    <ScrollView style={styles.main_container}>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.header_text}>Update user</Text>
      </View>
      <Text style={styles.input_lable}>Full Name</Text>
      <TextInput
        style={styles.input_text}
        placeholder="Enter your full name"
        value={data.username}
        onChangeText={(val) => handleChangeText("username", val)}
      ></TextInput>
      <Text style={styles.input_lable}>Phone number</Text>
      <TextInput
        style={styles.input_text}
        placeholder="Enter your phone number"
        value={data.phoneNumber}
        onChangeText={(val) => handleChangeText("phoneNumber", val)}
      ></TextInput>

      <TouchableOpacity
        style={{
          alignContent: "center",
          marginTop: 35,
          backgroundColor: "#0D47A1",
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 19,
        }}
        onPress={() => UpdateUser()}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Update
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
