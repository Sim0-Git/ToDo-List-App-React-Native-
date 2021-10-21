import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  FlatList,
  Modal,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import ItemForm from "../single-components/itemForm";
import Check from "../single-components/CheckBox";
import UpdateScreen from "../../components/screens/Update";

export function HomeScreen2({ route, navigation }) {
  const { key } = route.params; //Try to get these params from the update screen
  const { name } = route.params; //Try to get these params from the update screen
  console.log("Item name: " + name); //Just check the received data
  console.log("Item key: " + key);

  const [modalOpen, setAddModalOpen] = useState(false);
  const [itemArray, setItemArray] = useState([]);
  const [input, setInput] = useState();
  const [appInit, setAppInit] = useState(true);

  useEffect(() => {
    if (appInit) {
      getData();
      setAppInit(false);
      console.log("getting data...");
    } else {
      storeData();
      console.log("Storing data....");
    }

    storeData();
  }, [itemArray]);

  const addItem = (item) => {
    item.key = Math.random().toString();
    setItemArray((currentItem) => {
      return [item, ...currentItem];
    });
    // const key = new Date().getTime().toString();
    // item = { key: key, name: input };
    // setItemArray([...itemArray, item]);

    setAddModalOpen(false);
  };

  const updateItem = (key) => {
    console.log(key);
    setItemArray((oldArray) => {
      return [
        {
          value: value,
          key: key,
        },
        ...oldArray,
      ];
    });
  };

  const deleteItem = (key, name) => {
    console.log("Key of item to be deleted: " + key);
    console.log("Item name to be deleted : " + name);
    const newArray = itemArray.filter((item) => item.key !== key);
    setItemArray(newArray);
  };

  const storeData = async () => {
    const stringified = JSON.stringify(itemArray);
    try {
      await AsyncStorage.setItem("listData", stringified);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const stringified = await AsyncStorage.getItem("listData");
      setItemArray(stringified !== null ? JSON.parse(stringified) : []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              onPress={() => setAddModalOpen(false)}
              name="arrow-back"
              size={28}
              color="black"
              style={{ marginTop: 15, marginBottom: 15 }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 25 }}>
              Add item
            </Text>
          </View>
          <ItemForm addItem={addItem} />
        </View>
      </Modal>
      <FlatList
        data={itemArray}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          console.log(item),
          (
            <TouchableOpacity
              style={styles.itemButton}
              onPress={() => navigation.navigate("Update Item", item)} //Send the object selected to the update screen
              onLongPress={() => deleteItem(item.key, item.name)}
              update={updateItem}
            >
              <Text style={styles.text}>{item.name}</Text>
              <Check />
            </TouchableOpacity>
          )
        )}
      />
      {/* <UpdateScreen updateItem={updateItem} /> */}
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
    //marginTop: 20,
    backgroundColor: "#D0E7FF",
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 15,
  },
  addButton: {
    borderRadius: 30,
    backgroundColor: "dodgerblue",
    color: "white",
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 10,
    elevation: 8,
  },
});
