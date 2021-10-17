import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export function ItemComponent(props, route) {
  return (
    <TouchableWithoutFeedback style={styles.container}>
      <Text style={styles.text}>
        {props.itemName}
        {props.text}
      </Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "dodgerblue",
    //backgroundColor: "dodgerblue",
    borderRadius: 20,
    width: 300,
    padding: 15,
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
