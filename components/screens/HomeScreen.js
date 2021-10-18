import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
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

export function HomeScreen2({ navigation }) {
  const [modalOpen, setAddModalOpen] = useState(false);
  const [itemArray, setItemArray] = useState([]);

  const addItem = (item) => {
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
        data={itemArray}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate("Update Item", item)} //Send the object selected to the update screen
            onLongPress={() => deleteItem(item.key)}
          >
            <Text style={styles.text}>{item.name}</Text>
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
  itemContainer: {
    //borderWidth: 3,
    //borderColor: "dodgerblue",
    backgroundColor: "dodgerblue",
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
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
