import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { SignupBody } from "../single-components/signupBody";

export function Signup({ props, navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.View style={styles.logoContainer} animation="bounceIn">
        <Octicons
          style={{ marginLeft: 25 }}
          name="checklist"
          size={100}
          color="white"
        />
        <Text style={styles.logoText}>ShopList</Text>
      </Animatable.View>
      <Animatable.View
        style={{
          flex: 2,
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        animation="fadeInUpBig"
      >
        <SignupBody />
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
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  logoContainer: {
    flex: 0.65,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "dodgerblue",
    padding: 20,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  signup: {
    //flex: 0.2,
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
