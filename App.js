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
import { Signout } from "./components/single-components/Signout";

//Firebase
import { firebaseConfig } from "./config";
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

initializeApp(firebaseConfig); //initialize firebase

const Stack = createStackNavigator();

export default function App() {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState();
  const [signupError, setSignupError] = useState();
  const [signinError, setSigninError] = useState();

  const FBAuth = getAuth();
  const firestore = getFirestore();

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
    setSignupError(null);
    createUserWithEmailAndPassword(FBAuth, email, password)
      .then((userCredentials) => {
        console.log("User credential: ", userCredentials.user.uid);
        createUser("Users", {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
        });
        setUser(userCredentials);
        setAuth(true);
      })
      .catch((error) => {
        setSignupError(error.code);
      });
  };
  const SigninHandler = (email, password) => {
    signInWithEmailAndPassword(FBAuth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials);
        setAuth(true);
        console.log("Login successful");
      })
      .catch((error) => {
        setSigninError(error.code);
      });
  };

  const SignoutHandler = () => {
    signOut(FBAuth)
      .then(() => {
        setAuth(false);
        setUser(null);
      })
      .catch((error) => console.log(error.code));
  };

  const createUser = async (collection, data) => {
    await setDoc(doc(firestore, collection, data.id), data);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Group>
          <Stack.Screen
            initialParams={{ input: null }}
            name="Home"
            //component={HomeScreen}
            options={{
              title: "My List",
              headerStyle: { backgroundColor: "dodgerblue" },
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerLeft: null,
              headerRight: (props) => (
                <Signout {...props} handler={SignoutHandler} user={user} />
              ),
            }}
          >
            {(props) => <HomeScreen {...props} auth={auth} />}
          </Stack.Screen>
          {/* <Stack.Screen
            initialParams={{ input: null }}
            name="Home"
            options={{
              headerTitle: "My List",
              headerStyle: { backgroundColor: "dodgerblue" },
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerLeft: null,
              headerRight: (props) => (
                <Signout {...props} handler={SignoutHandler} user={user} />
              ),
            }}
          >
            {(props) => <HomeScreen {...props} auth={auth} />}
          </Stack.Screen> */}
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            //component={Signin}
            options={{
              headerLeft: null,
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "dodgerblue",
              headerTitleStyle: { fontSize: 28 },
              headerShown: false,
            }}
          >
            {(props) => (
              <Signin
                {...props}
                handler={SigninHandler}
                auth={auth}
                error={signinError}
              />
            )}
          </Stack.Screen>
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
              <Signup
                {...props}
                handler={SignupHandler}
                auth={auth}
                error={signupError}
              />
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
