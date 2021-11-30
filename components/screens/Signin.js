import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { LoginBody } from "../single-components/loginBody";
import * as AppColors from "../colorsApp";
import { Feedback } from "../single-components/Feedback";

export function Signin(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (props.auth === true) {
      navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    }
  }, [props.auth]);

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
        <LoginBody
          onEmailInputChange={(data) => {
            setEmail(data);
          }}
          onPasswordInputChange={(data) => {
            setPassword(data);
          }}
        />
        <View style={styles.signin}>
          <TouchableOpacity
            style={styles.touchableSignin}
            onPress={() => {
              console.log("User email(login): " + email);
              console.log("User password(login): " + password);
              props.handler(email, password);
            }}
          >
            <Text style={styles.signinText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signup}>
          <Text style={styles.outerText}>
            New to ShopList ?{"  "}
            <Text
              style={styles.innerText}
              onPress={() => navigation.navigate("Signup")}
            >
              Register
            </Text>
          </Text>
          <Feedback message={props.error} />
        </View>
      </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.PRIMARY_COLOR,
  },
  logoContainer: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: AppColors.PRIMARY_COLOR,
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
    backgroundColor: AppColors.PRIMARY_COLOR,
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
    color: AppColors.PRIMARY_COLOR,
  },
});
