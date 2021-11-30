import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  FlatList,
  TextInput,
} from "react-native";

export function Signout(props) {
  return (
    <TouchableOpacity style={styles.signoutBtn} onPress={() => props.handler()}>
      <Text style={styles.signoutTxt}>Sign out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signoutBtn: { padding: 10 },
  signoutTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
