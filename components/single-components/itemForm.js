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
  const [validInput, setValidInput] = useState(false);

  const onTextChange = (value) => {
    if (value.lenth >= 3) {
      setValidInput(true);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
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
              //style={validInput ? styles.button : styles.buttonDisabled}
              style={styles.button}
              onPress={props.handleSubmit}
              //disabled={validInput ? false : true}
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
    backgroundColor: "lightgrey",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
});
