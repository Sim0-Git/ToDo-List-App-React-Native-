import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { Formik } from "formik";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function UpdateScreen({ route, navigation }) {
  const { name } = route.params;
  const { key } = route.params;
  console.log(key);
  const [input, setInput] = useState();

  //function that handle the press of the button
  const handelPress = () => {
    Alert.alert("Update", "This item has been updated", [{ text: "Close" }]);
    //Show an alert on the screen
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New item"
            //onChangeText={(input) => setInput(input)}
            value={input}
          >
            {name}
            {/*Get name of the item from the home page  */}
          </TextInput>
          <TouchableOpacity>
            <FontAwesome5 name="eraser" size={24} color="#F59133" />
          </TouchableOpacity>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={handelPress}
          underlayColor="lightblue"
        >
          <Text style={styles.text}>Update</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    padding: 30,
  },
  innerContainer: {
    //flex: 0.35,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    justifyContent: "space-around",
    height: 250, //Don' like this
    marginTop: 100,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    borderWidth: 2,
    padding: 12,
    borderColor: "dodgerblue",
    height: 50,
  },
  input: {
    fontSize: 18,
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

export default UpdateScreen;
