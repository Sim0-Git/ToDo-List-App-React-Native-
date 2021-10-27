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

export function LoginBody() {
  return (
    <View style={styles.inputsContainer} animation="fadeInUpBig">
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

      <TouchableWithoutFeedback style={styles.touchableEmail}>
        <Ionicons name="person" size={20} color="dodgerblue" />
        <TextInput style={styles.inputs} placeholder="Enter your email" />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={styles.touchablePassword}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="lock" size={20} color="dodgerblue" />
          <TextInput
            style={styles.inputs}
            placeholder="Enter your password"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <View>
          <MaterialCommunityIcons
            name="eye-off-outline"
            size={20}
            color="grey"
          />
        </View>
      </TouchableWithoutFeedback>
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
  touchableEmail: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 20,
    fontSize: 18,
    elevation: 8,
    marginBottom: 30,
    backgroundColor: "white",
    borderColor: "lightgrey",
    padding: 14,
  },
  touchablePassword: {
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
