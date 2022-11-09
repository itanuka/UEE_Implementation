import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../../Firebase/Firebase-config";
import { useNavigation } from "@react-navigation/native";

export default function SignUpPage() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChangeText = (user, value) => {
    setUser((prevState) => ({ ...prevState, [user]: value }));
  };

  const signin = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        setDoc(doc(db, "RegisteredUser", auth.currentUser.uid), {
          uid: auth.currentUser.uid,
          role: "staff",
          email: user.email,
          username: user.username,
          phoneNumber: user.phoneNumber,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });

    ToastAndroid.show(
      user.username + " Request sent successfully!",
      ToastAndroid.SHORT
    );
  };

  return (
    <ScrollView style={styles.main_container}>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.header_text}>Create an Account</Text>
      </View>
      <Text style={styles.input_lable}>Full Name</Text>
      <TextInput
        style={styles.input_text}
        placeholder="Enter your full name"
        onChangeText={(val) => handleChangeText("username", val)}
      ></TextInput>
      <Text style={styles.input_lable}>Phone number</Text>
      <TextInput
        style={styles.input_text}
        placeholder="Enter your phone number"
        onChangeText={(val) => handleChangeText("phoneNumber", val)}
      ></TextInput>
      <Text style={styles.input_lable}>Email</Text>
      <TextInput
        style={styles.input_text}
        keyboardType="email-address"
        placeholder="Enter your email"
        onChangeText={(val) => handleChangeText("email", val)}
      ></TextInput>
      <Text style={styles.input_lable}>Password</Text>
      <TextInput
        style={styles.input_text}
        secureTextEntry={true}
        placeholder="Enter your password"
        onChangeText={(val) => handleChangeText("password", val)}
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
        onPress={() => signin()}
        underlayColor="#0084fffa"
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text>You already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    top: 20,
    padding: 15,
  },
  header_text: {
    fontSize: 25,
    fontWeight: "700",
    color: "#130160",
    textAlign: "center",
  },
  input_text: {
    borderColor: "#67afff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 10,
    marginVertical: 5,
  },
  input_lable: {
    color: "#0D0140",
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
});
