import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../Firebase/Firebase-config";

export default function LoginHome() {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Document data id:", user.uid);

        const getDate = async (id) => {
          const docRef = await getDoc(doc(db, "RegisteredUser", id));

          if (docRef.exists()) {
            const myData = docRef.data();

            console.log("Document data:", docRef.data().worker_name);
            const worker_data = docRef.data();
            // console.log("Document data:", myData.role);
            if (myData.role === "admin") {
              console.log("ok");
              navigation.navigate("Admin Home");
            }
            if (myData.role === "staff") {
              console.log("ok");
              navigation.navigate("Client", { worker_data });
            }
            if (myData.role === "peon") {
              console.log("ok");
              navigation.navigate("Peon Home", { worker_data });
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        };
        getDate(user.uid);
      }
    });
    return subscribe;
  });

  const signin = async () => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // return { user };
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.main_container}>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.header_text}>Sign In</Text>
      </View>
      <View>
        <Text style={styles.input_lable}>Email</Text>
        <TextInput
          style={styles.input_text}
          keyboardType="email-address"
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <Text style={styles.input_lable}>Password</Text>
        <TextInput
          style={styles.input_text}
          secureTextEntry={true}
          placeholder="Enter your password"
          onChangeText={(text) => setPassword(text)}
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
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>Sign In</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text>You don't have an account yet ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={{
            alignContent: "center",
            marginTop: 35,
            backgroundColor: "#0D47A1",
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 19,
          }}
          onPress={() => navigation.navigate("Sign Up")}
          underlayColor="#0084fffa"
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>Sign Up</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    top: 50,
    margin: 15,
  },
  header_text: {
    fontSize: 25,
    fontWeight: "700",
    color: "#130160",
    textAlign: "center",
  },
  input_lable: {
    color: "#0D0140",
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  input_text: {
    borderColor: "#67afff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingLeft: 10,
    marginVertical: 5,
  },
});
