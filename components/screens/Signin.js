import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function Signin({ props, navigation }) {
  return (
    <View>
      <View>
        <TextInput placeholder="Enter your email" />
        <TextInput placeholder="Enter your password" />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text>Signin</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Not subscribed? Click here to signin</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
