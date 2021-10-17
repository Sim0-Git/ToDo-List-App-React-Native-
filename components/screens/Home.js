import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Alert,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { ItemComponent } from "../ItemComponent";

function HomeScreen({ navigation, route }) {
  const handlePress = () => {
    alert("fuck you");
  };
  const pressDelete = () => {
    Alert.alert("Delete", "Sure you want to delete this item?", [
      { text: "Yes" },
      { text: "No" },
    ]);
  };
  const renderComponent = () => {};

  const { item } = route.params; //Get value name form the Add screen

  const [itemsArray, setItemsArray] = useState([]);
  itemsArray.unshift(item); //Add the item to the array

  console.log(itemsArray);

  return (
    <View style={styles.container}>
      {/*Component for rendering every item added in the list */}
      <View>
        {/*The array has already one undefined element,
         in order to not render that I am using this condition */}
        {itemsArray[0] == undefined //if hte array at position 0 is undefined then remove that element
          ? itemsArray.splice([0])
          : itemsArray.map((item, index) => {
              return <ItemComponent itemName={item} /*text={item}*/ />;
            })}
      </View>
      {/* <Text>{route.params.name} </Text> */}
      <Text onPress={pressDelete}>Item</Text>
      {/* <TouchableHighlight onPress={handlePress}>
        <Image
          blurRadius={0} //blur the image
          resizeMode={"center"} // resize the image if the dimension is different from the original image
          fadeDuration={1000} //Show the image with a delay, just on android
          source={{
            width: 300,
            height: 200,
            uri: "https://i.pinimg.com/originals/87/ea/30/87ea30af8b657b290c1bebded4b290ee.jpg",
          }}
        />
      </TouchableHighlight> */}

      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate("Add Item")}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Add Item</Text>
      </TouchableHighlight>
      <Button
        onPress={() => navigation.navigate("Update Item")}
        title="Update item"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight, //Gives padding on top so the content is in the safe area
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "dodgerblue",
    padding: 5,
  },
});

export default HomeScreen;
