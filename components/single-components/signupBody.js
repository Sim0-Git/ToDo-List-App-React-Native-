import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
//import { auth } from "../../App";

export function SignupBody({
  onValidForm,
  onEmailInputChange,
  onFullNameInputChange,
  onPasswordInputChange,
  onConfirmPasswordInputChange,
}) {
  //----------Johannes---------------
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const validateEmail = (emailVal) => {
    //Check if the email entered has the @ sign
    if (emailVal.indexOf("@") > 0) {
      onEmailInputChange(emailVal);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const validatePassword = (passwordVal) => {
    if (passwordVal.length > 6) {
      onPasswordInputChange(passwordVal);
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };
  useEffect(() => {
    if (validEmail && validPassword) {
      setValidForm(true);
      onValidForm(true); //Enable the sign up button
    } else {
      setValidForm(false);
      onValidForm(false); //Disable the sign up button
    }
  }, [validEmail, validPassword]);

  //-----------------------------------

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkTextInputChange, setCheckTextInputChange] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [data, setData] = useState({
    email: "",
    password: "",
    checkTextInputChange: false,
    securePasswordEntry: true,
    secureConfirmPasswordEntry: true,
  });

  const handleSignin = () => {
    auth
      .createUserWithEmailAndPassword(data)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.data.email);
      })
      .catch((error) => alert(error.message));
  };

  const textInputChange = (value) => {
    if (value.length !== 0) {
      onEmailInputChange(value);
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
  const fullNameTextChange = (value) => {
    if (value.length > 5) {
      onFullNameInputChange(value);
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
    onConfirmPasswordInputChange(value);
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
          Create account
        </Text>
        <TouchableWithoutFeedback style={styles.touchable}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="person" size={20} color="dodgerblue" />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              //onChangeText={(value) => textInputChange(value)}
              onChangeText={(value) => validateEmail(value)}
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
            <Feather name="type" size={19} color="dodgerblue" />
            <TextInput
              style={styles.inputs}
              placeholder="Full name"
              // onChangeText={(value) => textInputChange(value)}
              //onChangeText={(value) => fullNameTextChange(value)}
              onChangeText={(value) => validatePassword(value)}
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
              //onChangeText={(value) => handelPasswordChange(value)}
              onChangeText={(val) => validatePassword(val)}
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
      </KeyboardAvoidingView>
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
