import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  TextInput,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
StatusBar.setHidden(true);

export default function updateItemForm({ updateItem, itemName, itemKey }) {
  const [textInput, setTextInput] = useState();
  const [validInput, setValidInput] = useState(false);
  const navigation = useNavigation();

  const onValidate = (values) => {
    //Check if the input from the user is empty
    let invalid = {};

    if (!values.name) {
      alert("Item name cannot be empty");
      invalid.name = "Required";
    }
    return invalid;
  };

  const backHome = () => {
    navigation.reset({ index: 0, routes: [{ name: "Home" }] });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Formik
          validate={onValidate}
          initialValues={{ name: itemName, key: itemKey }}
          onSubmit={(value, actions) => {
            actions.resetForm(); //Reset the form
            updateItem(itemKey, value.name, item);
            console.log("New object", value);
            console.log("New item name: ", itemName);
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
                style={styles.button}
                // onPress={props.handleSubmit}
                onPress={() => {
                  backHome();
                }}
                onPressIn={props.handleSubmit}
              >
                <Text style={styles.text}>Update</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeContainer: {
    //flex: 1,
  },
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
