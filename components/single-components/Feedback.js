import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";

export function Feedback(props) {
  const alert = () => {
    Alert.alert("Alert", "Email already in use", [
      {
        text: "Close",
      },
    ]);
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          alignSelf: "center",
          fontWeight: "bold",
          color: "red",
        }}
      >
        {props.message}
      </Text>
    </View>
  );
}
