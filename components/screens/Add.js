import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Alert } from "react-native";
import {
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { ItemComponent } from "../ItemComponent";

function AddScreen({ navigation }) {
  const [input, setInput] = useState();
  const [userInput, setUserInput] = useState();
  const [feedBack, setFeedBack] = useState();
  const [itemsArray, setItemsArray] = useState([]);

  const handleInput = () => {
    //console.log(input);
    //Keyboard.dismiss();
    setItemsArray([...itemsArray, input]);
    setUserInput(input);
    setInput(null);

    if (input == null) {
      setFeedBack("This field cannot be empty");
      Alert.alert("Alert", "This field cannot be empty", [{ text: "Close" }]);
    }
    // navigation.navigate({
    //   name: "Home",
    //   params: { name: input },
    //   merge: true,
    // });
  };
  //Just checking the array content
  for (let i = 0; i < itemsArray.length; i++) {
    console.log("Item in the array: " + itemsArray[i]);
  }

  const completeItem = (index) => {
    let itemsCopy = [...itemsArray];
    itemsCopy.splice(index, 1);
    setItemsArray(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          placeholder="New item"
          value={input}
          onChangeText={(input) => setInput(input)}
        />
        <Text>Item name: {userInput}</Text>
        <Text>{feedBack}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={handleInput}
          underlayColor="lightblue"
        >
          <Text style={styles.text}>Add</Text>
        </TouchableHighlight>
        {/* <FlatList
          data={itemsArray}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress
              {...() => navigation.navigate("Home", item)}
            >
              <Text>{item.value}</Text>
            </TouchableWithoutFeedback>
          )}
        /> */}
      </View>
      <View>
        {/*Items of the list */}
        {itemsArray.map((item, index) => {
          return <ItemComponent text={item} />;
        })}
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
  touchableContainer: {
    borderWidth: 2,
    borderColor: "dodgerblue",
    borderRadius: 20,
    width: 300,
    padding: 12,
  },
  touchableText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    //textAlign:"center",
  },
});

export default AddScreen;
