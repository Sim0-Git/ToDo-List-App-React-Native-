import React, { useState } from "react";
import { StyleSheet, Text, Button } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export function ItemComponent(props, route, onPress) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>
        {props.itemName}
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "dodgerblue",
    //backgroundColor: "dodgerblue",
    borderRadius: 20,
    width: 300,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
