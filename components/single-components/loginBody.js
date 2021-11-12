import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
//import { auth } from "../../App";

export function LoginBody({ onEmailInputChange, onPasswordInputChange }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    checkTextInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (value) => {
    onEmailInputChange(value);
    if (value.length !== 0) {
      setData({
        ...data,
        email: value,
        checkTextInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        checkTextInputChange: false,
      });
    }
  };

  const handelPasswordChange = (value) => {
    onPasswordInputChange(value);
    setData({
      ...data,
      password: value,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.inputsContainer} animation="fadeInUpBig">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text
          style={{
            fontSize: 20,
            color: "dodgerblue",
            fontWeight: "bold",
            marginBottom: 25,
            padding: 10,
            alignSelf: "center",
          }}
        >
          Login to your account
        </Text>

        <TouchableWithoutFeedback style={styles.touchable}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="person" size={20} color="dodgerblue" />
            <TextInput
              style={styles.inputs}
              placeholder="Enter your email"
              value={data.email}
              onChangeText={(value) => textInputChange(value)}
            />
          </View>
          <View>
            {data.checkTextInputChange ? (
              <Entypo name="check" size={20} color="green" />
            ) : null}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.touchable}>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="lock" size={20} color="dodgerblue" />
            <TextInput
              style={styles.inputs}
              placeholder="Enter your password"
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              value={data.password}
              onChangeText={(value) => handelPasswordChange(value)}
            />
          </View>
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <MaterialCommunityIcons
                name="eye-off-outline"
                size={20}
                color="grey"
              />
            ) : (
              <MaterialCommunityIcons name="eye" size={20} color="grey" />
            )}
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
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
