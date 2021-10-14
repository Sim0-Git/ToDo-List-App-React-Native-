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
} from "react-native";
import Constants from "expo-constants";
import { TextInput } from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  const handlePress = () => {
    alert("fuck you");
  };
  const pressDelete = () => {
    Alert.alert("Delete", "Sure you want to delete this item?", [
      { text: "Yes" },
      { text: "No" },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text onPress={pressDelete}>Item</Text>
      <Image source={require("../../assets/favicon.png")} />
      <TouchableHighlight onPress={handlePress}>
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
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate("Add Item")}>
        <Text>Add Item</Text>
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
  
});

export default HomeScreen;
