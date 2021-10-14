import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

function AddScreen({ navigation }) {
  //function that handle the press of the button
  const handelPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput style={styles.input} placeholder="New item"></TextInput>
        <TouchableHighlight
          style={styles.button}
          onPress={handelPress}
          underlayColor="lightblue"
        >
          <Text style={styles.text}>Add</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems:"center",
    //justifyContent: "center",
    backgroundColor: "dodgerblue",
    padding: 20,
  },
  innerContainer: {
    flex: 0.35,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    justifyContent: "space-around",
  },
  input: {
    borderRadius: 15,
    borderWidth: 2,
    padding: 12,
    borderColor: "dodgerblue",
    fontSize: 18,
    height: 50,
  },
  button: {
    borderRadius: 15,
    width: 100,
    height: 40,
    alignSelf: "flex-end",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  text: {
    alignSelf: "center",
    fontSize: 18,
    color: "white",
  },
});

export default AddScreen;
