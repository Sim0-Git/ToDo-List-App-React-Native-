import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import all screens
import UpdateScreen from "./components/screens/Update";
//import { AddScreen2 } from "./components/screens/AddScreen";
import { SplashScreen } from "./components/screens/Splash";
import { HomeScreen } from "./components/screens/HomeScreen";
import { Signup } from "./components/screens/Signup";
import { Signin } from "./components/screens/Signin";

//Firebase
import { firebaseConfig } from "./config";
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

initializeApp(firebaseConfig); //initialize firebase

const Stack = createStackNavigator();

export default function App() {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState();
  const FBAuth = getAuth();

  useEffect(() => {
    //function that handle the user object
    onAuthStateChanged(FBAuth, (user) => {
      if (user) {
        setAuth(true);
        setUser(user);
      } else {
        setAuth(false);
        setUser(null);
      }
    });
  });
  const SignupHandler = (email, password) => {
    createUserWithEmailAndPassword(FBAuth, email, password)
      .then((userCredentials) => {
        console.log("User credential: ", userCredentials);
        setUser(userCredentials);
        setAuth(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Group>
          <Stack.Screen
            initialParams={{ input: null }}
            name="Home"
            component={HomeScreen}
            options={{
              title: "My List",
              headerStyle: { backgroundColor: "dodgerblue" },
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Signin}
            options={{
              headerLeft: null,
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "dodgerblue",
              headerTitleStyle: { fontSize: 28 },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            options={{
              headerLeft: null,
              headerStyle: { backgroundColor: "dodgerblue" },
              headerTintColor: "white",
              headerShown: false,
            }}
          >
            {(props) => (
              <Signup {...props} handler={SignupHandler} auth={auth} />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Update Item"
            component={UpdateScreen}
            //options={{ headerStyle: { backgroundColor: "dodgerblue" } }}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          {/* <Stack.Screen name="Add Item" component={AddScreen2} />
          <Stack.Screen
            name="Update Item"
            component={UpdateScreen}
            options={{ headerStyle: { backgroundColor: "dodgerblue" } }}
          /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
