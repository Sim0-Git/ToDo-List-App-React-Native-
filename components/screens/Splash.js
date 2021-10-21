import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  Octicons,
  Feather,
} from "@expo/vector-icons";

// export default class Splash extends Component {
//   componentDidMount() {
//     //method that gets called after a component is mounted
//     setTimeout(() => {
//       this.props.navigation.navigate("Home");
//     }, 2000);
//   }
export function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Octicons
          style={{ marginLeft: 25 }}
          name="checklist"
          size={150}
          color="white"
        />
        <Text style={styles.logoText}>ShopList</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Get started</Text>
        <Feather name="arrow-right-circle" size={40} color="white" />
      </TouchableOpacity>
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
