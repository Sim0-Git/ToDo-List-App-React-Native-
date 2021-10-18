import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/screens/Home";
import AddScreen from "./components/screens/Add";
import UpdateScreen from "./components/screens/Update";

import { HomeScreen2 } from "./components/screens/HomeScreen";
import { AddScreen2 } from "./components/screens/AddScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            initialParams={{ input: null }}
            name="Home"
            component={HomeScreen2}
            options={{
              title: "My List",
              headerStyle: { backgroundColor: "lightblue" },
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
          <Stack.Screen name="Add Item" component={AddScreen2} />
          <Stack.Screen name="Update Item" component={UpdateScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
