import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Octicons,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { SignupBody } from "../single-components/signupBody";

export function Signup({ props, navigation }) {
  const [userFullName, setUserFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validForm, setValidForm] = useState(false);

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
        <SignupBody
          onValidForm={(val) => {
            setValidForm(val);
          }}
          onEmailInputChange={(emailData) => {
            setEmail(emailData);
          }}
          onFullNameInputChange={(fullNameData) => {
            setUserFullName(fullNameData);
          }}
          onPasswordInputChange={(passwordData) => {
            setPassword(passwordData);
          }}
          onConfirmPasswordInputChange={(confirmPasswordData) => {
            setConfirmPassword(confirmPasswordData);
          }}
        />
        {/* <View style={styles.signup}>
          <TouchableOpacity
            style={styles.touchableSignup}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.signup}>
          <TouchableOpacity
            style={
              validForm
                ? styles.touchableSignupEnabled
                : styles.touchableSignupDisabled
            }
            // onPress={() => {
            //   navigation.navigate("Home");
            // }}
            onPress={() => {
              console.log("User email(Signup): " + email);
              console.log("User full name(Signup): " + userFullName);
              console.log("User password(Signup): " + password);
              console.log(
                "User confirmed password(Signup): " + confirmPassword
              );
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
  touchableSignupEnabled: {
    backgroundColor: "dodgerblue",
    borderRadius: 15,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  touchableSignupDisabled: {
    backgroundColor: "lightgrey",
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
  inputsContainer: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    borderRadius: 20,
    fontSize: 18,
    elevation: 8,
    marginBottom: 30,
    backgroundColor: "white",
    borderColor: "lightgrey",
    padding: 14,
  },
  inputs: {
    fontSize: 16,
    marginLeft: 10,
  },
});
