import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function AddScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Add Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AddScreen;
