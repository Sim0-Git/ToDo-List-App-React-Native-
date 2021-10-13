import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30 }}>Home</Text>
      <Button
        onPress={() => navigation.navigate("Add Item")}
        title="Add Item"
      />
      <Button
        onPress={() => navigation.navigate("Update Item")}
        title="Update item"
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
