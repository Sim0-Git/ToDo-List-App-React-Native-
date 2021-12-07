import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Alert } from "react-native";
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
import {
  getFirestore,
  setDoc,
  addDoc,
  doc,
  collection,
  query,
  where,
  onSnapshot,
  initializeFirestore,
} from "firebase/firestore";

//initializeApp(firebaseConfig); //initialize firebase
const FBapp = initializeApp(firebaseConfig);
const FSdb = initializeFirestore(FBapp, { useFetchStreams: false });
const FBauth = getAuth();

const Stack = createStackNavigator();

export default function App() {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState();
  const [signupError, setSignupError] = useState();
  const [signinError, setSigninError] = useState();
  const [data, setData] = useState();

  //const FBAuth = getAuth();
  //const firestore = getFirestore();

  useEffect(() => {
    //function that handle the user object
    onAuthStateChanged(FBauth, (user) => {
      if (user) {
        setAuth(true);
        setUser(user);
        console.log("authed");
        if (!data) {
          getData();
        }
      } else {
        setAuth(false);
        setUser(null);
      }
    });
  });

  const SignupHandler = (email, password) => {
    setSignupError(null);
    createUserWithEmailAndPassword(FBauth, email, password)
      .then((userCredentials) => {
        console.log("User credential: ", userCredentials.user.uid);
        setUser(userCredentials.user);
        setAuth(true);
      })
      .catch((error) => {
        setSignupError(error.code);
      });
  };

  const SigninHandler = (email, password) => {
    signInWithEmailAndPassword(FBauth, email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setAuth(true);
        console.log("User: ", userCredentials.user.uid);
      })
      .catch((error) => {
        setSigninError(error.code);
      });
  };

  const SignoutHandler = () => {
    Alert.alert("Alert", "You have been sign out", [
      {
        text: "Ok",
      },
    ]);
    signOut(FBauth)
      .then(() => {
        setAuth(false);
        setUser(null);
      })
      .catch((error) => console.log(error.code));
  };

  const addData = async (data) => {
    const ref = await setDoc(
      doc(FSdb, `Users/${user.uid}/documents/${new Date().getTime()}`),
      data
    );
  };

  const getData = () => {
    //console.log("...getting data", user);
    const FSQuery = query(collection(FSdb, `Users/${user.uid}/documents`));
    const unsubscribe = onSnapshot(FSQuery, (querySnapshot) => {
      let FSdata = [];
      querySnapshot.forEach((doc) => {
        let item = {};
        item = doc.data();
        item.id = doc.id;
        console.log(doc.id);
        FSdata.push(item);
      });
      setData(FSdata);
      console.log(FSdata);
    });
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
            {(props) => (
              <HomeScreen
                {...props}
                auth={auth}
                add={addData}
                data={data}
                user={user}
              />
            )}
          </Stack.Screen>
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
