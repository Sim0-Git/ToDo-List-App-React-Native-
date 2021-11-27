import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  FlatList,
  TextInput,
} from "react-native";
import { Formik } from "formik";

export default function itemForm({ addItem }) {
  const [textInput, setTextInput] = useState();
  const [validInput, setValidInput] = useState(false);

  const onValidate = (values) => {
    //Check if the input from the user is empty
    let invalid = {};

    if (!values.name) {
      alert("Item name cannot be empty");
      invalid.name = "Required";
    }
    return invalid;
  };

  return (
    <View style={styles.container}>
      <Formik
        validate={onValidate}
        initialValues={{ name: "", key: "" }}
        onSubmit={(value, actions) => {
          actions.resetForm(); //Reset the form
          addItem(value);
          console.log(value);
        }}
      >
        {(props) => (
          <View style={styles.innerContainer}>
            <TextInput
              style={styles.input}
              placeholder="Item name"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TouchableOpacity
              //style={props.values.name ? styles.button : styles.buttonDisabled}
              style={styles.button}
              onPress={props.handleSubmit}
              //disabled={props.values.name ? false : true}
            >
              <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "dodgerblue",
    padding: 30,
  },
  innerContainer: {
    marginTop: 100,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 15,
    height: 250,
    justifyContent: "space-around",
  },
  input: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "dodgerblue",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    borderRadius: 15,
    height: 45,
  },
  buttonDisabled: {
    backgroundColor: "red",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
});
