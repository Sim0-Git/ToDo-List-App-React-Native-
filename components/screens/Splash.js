import React, { Component, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

// export default class Splash extends Component {
//   componentDidMount() {
//     //method that gets called after a component is mounted
//     setTimeout(() => {
//       this.props.navigation.navigate("Home");
//     }, 2000);
//   }

export function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn">
        <Octicons
          style={{ marginLeft: 25 }}
          name="checklist"
          size={150}
          color="white"
        />
        <Text style={styles.logoText}>ShopList</Text>
      </Animatable.View>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Get started</Text>
        <Feather name="arrow-right-circle" size={40} color="white" />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "dodgerblue",
  },
  button: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
