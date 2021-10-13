import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function UpdateScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Update Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Update" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default UpdateScreen;
