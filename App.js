import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/screens/Home";
import AddScreen from "./components/screens/Add";
import UpdateScreen from "./components/screens/Update";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "My List",
              headerStyle: { backgroundColor: "orange" },
              headerTintColor: "dodgerblue",
              headerTitleAlign: "center",
            }} //headerShown: false //Hide the header
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          <Stack.Screen name="Add Item" component={AddScreen} />
          <Stack.Screen name="Update Item" component={UpdateScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
