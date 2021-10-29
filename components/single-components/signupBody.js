import React, { useState } from "react";
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
  Entypo,
} from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export function SignupBody() {
  const [data, setData] = useState({
    email: "",
    password: "",
    checkTextInputChange: false,
    securePasswordEntry: true,
    secureConfirmPasswordEntry: true,
  });

  const textInputChange = (value) => {
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
    setData({
      ...data,
      password: value,
    });
  };
  const updateSecurePasswordEntry = () => {
    setData({
      ...data,
      securePasswordEntry: !data.securePasswordEntry,
    });
  };
  const handelConfirmPasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };
  const updateSecureConfirmPasswordEntry = () => {
    setData({
      ...data,
      secureConfirmPasswordEntry: !data.secureConfirmPasswordEntry,
    });
  };
  return (
    <View style={styles.inputsContainer}>
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
        Create account
      </Text>
      <TouchableWithoutFeedback style={styles.touchable}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="person" size={20} color="dodgerblue" />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
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
          <Ionicons name="person" size={20} color="dodgerblue" />
          <TextInput
            style={styles.inputs}
            placeholder="Full name"
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
            placeholder="Password"
            secureTextEntry={data.securePasswordEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(value) => handelPasswordChange(value)}
          />
        </View>
        <TouchableOpacity onPress={updateSecurePasswordEntry}>
          {data.securePasswordEntry ? (
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
      <TouchableWithoutFeedback style={styles.touchable}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="lock" size={20} color="dodgerblue" />
          <TextInput
            style={styles.inputs}
            placeholder="Confirm password"
            secureTextEntry={data.secureConfirmPasswordEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(value) => handelConfirmPasswordChange(value)}
          />
        </View>
        <TouchableOpacity onPress={updateSecureConfirmPasswordEntry}>
          {data.secureConfirmPasswordEntry ? (
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 2.5,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //backgroundColor: "green",
  },
  inputs: {
    fontSize: 18,
    marginLeft: 10,
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
});
