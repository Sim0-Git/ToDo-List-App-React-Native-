import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  FlatList,
  Modal,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import ItemForm from "./itemForm";
import Check from "./CheckBox";

export function HomeScreen2({ route, navigation }) {
  const { key } = route.params;
  const { name } = route.params;
  const [modalOpen, setAddModalOpen] = useState(false);
  const [itemArray, setItemArray] = useState([]);
  console.log("Item name: " + name);
  console.log("Item key: " + key);

  const addItem = (item) => {
    //let keyInt = 0;
    //item.key = keyInt.toString();
    //keyInt += 1;
    item.key = Math.random().toString();
    setItemArray((currentItem) => {
      return [item, ...currentItem];
    });
    setAddModalOpen(false);
  };

  const deleteItem = (key) => {
    console.log(key);
    const newArray = itemArray.filter((item) => item.key !== key);
    setItemArray(newArray);
  };
  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View>
          <Ionicons
            onPress={() => setAddModalOpen(false)}
            name="arrow-back"
            size={28}
            color="black"
          />
          <ItemForm addItem={addItem} />
        </View>
      </Modal>
      <FlatList
        style={styles.flatListContainer}
        data={itemArray}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemButton}
            onPress={() => navigation.navigate("Update Item", item)} //Send the object selected to the update screen
            onLongPress={() => deleteItem(item.key)}
          >
            <Text style={styles.text}>{item.name}</Text>
            <Check />
          </TouchableOpacity>
        )}
      />

      <MaterialIcons
        style={styles.addButton}
        name="add"
        size={50}
        onPress={() => setAddModalOpen(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  flatListContainer: {
    //flex: 1,
    //width: "100%",
    //flexDirection: "row",
    //backgroundColor: "red",
  },
  itemButton: {
    //borderWidth: 3,
    //borderColor: "dodgerblue",
    backgroundColor: "dodgerblue",
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkBox: {
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  addButton: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 30,
    padding: 0,
    backgroundColor: "dodgerblue",
    color: "white",
    alignSelf: "flex-end",
  },
});
