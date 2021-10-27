import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  Octicons,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { LoginBody } from "../single-components/loginBody";

export function Signin({ props, navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.View
        style={{ flex: 0.8, justifyContent: "flex-end" }}
        animation="bounceIn"
      >
        <View style={styles.logoContainer}>
          <Octicons
            style={{ marginLeft: 25 }}
            name="checklist"
            size={100}
            color="white"
          />
          <Text style={styles.logoText}>ShopList</Text>
        </View>
      </Animatable.View>

      <Animatable.View style={{ flex: 2 }} animation="fadeInUpBig">
        <LoginBody />
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
        <View style={styles.signup} animation="fadeInUpBig">
          <Text style={styles.outerText}>
            New to ShopList ?{"  "}
            <Text
              style={styles.innerText}
              onPress={() => navigation.navigate("Signup")}
            >
              Register
            </Text>
          </Text>
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
    flex: 0.8,
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
  signin: {
    flex: 0.4,
    padding: 20,
    marginTop: 0,
    justifyContent: "flex-end",
    backgroundColor: "white",
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
    justifyContent: "flex-start",
    backgroundColor: "white",
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
