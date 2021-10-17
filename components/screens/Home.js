import React from "react";
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

  const { name } = route.params;

  return (
    <View style={styles.container}>
      {/*Component for rendering every item added in the list */}
      <ItemComponent itemName={name} />
      <Text>{route.params.name} </Text>
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
