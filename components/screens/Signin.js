import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

export function Signin({ props, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Octicons
          style={{ marginLeft: 25 }}
          name="checklist"
          size={100}
          color="dodgerblue"
        />
        <Text style={styles.logoText}>ShopList</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput style={styles.inputs} placeholder="Enter your email" />
        <TextInput style={styles.inputs} placeholder="Enter your password" />
      </View>
      <View style={styles.signin}>
        <TouchableOpacity
          style={styles.touchableSignin}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.signinText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signup}>
        <Text style={styles.outerText}>
          New to ShopList?{"  "}
          <Text
            style={styles.innerText}
            onPress={() => navigation.navigate("Signup")}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red",
    padding: 20,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "dodgerblue",
  },
  inputsContainer: {
    flex: 1,
    padding: 20,
    //backgroundColor: "green",
  },
  inputs: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 20,
    fontSize: 18,
    paddingLeft: 15,
    elevation: 8,
    marginBottom: 30,
  },
  signin: {
    flex: 0.3,
    padding: 20,
    marginTop: 0,
    //backgroundColor: "red",
  },
  touchableSignin: {
    backgroundColor: "dodgerblue",
    borderRadius: 15,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  signinText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  signup: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red",
  },
  outerText: {
    fontSize: 15,
    padding: 15,
  },
  innerText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 18,
    color: "dodgerblue",
  },
});
