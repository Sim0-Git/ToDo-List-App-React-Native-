import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

export function Signup(props) {
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
        <TextInput style={styles.inputs} placeholder="Email" />
        <TextInput style={styles.inputs} placeholder="Full name" />
        <TextInput style={styles.inputs} placeholder="Password" />
        <TextInput style={styles.inputs} placeholder="Confirm password" />
      </View>
      <View style={styles.signup}>
        <TouchableOpacity
          style={styles.touchableSignup}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
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
    flex: 1.3,
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
    flex: 2.5,
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
    marginBottom: 15,
  },
  signup: {
    //flex: 1,
    marginBottom: 30,
    padding: 20,
  },
  touchableSignup: {
    backgroundColor: "dodgerblue",
    borderRadius: 15,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  signupText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
