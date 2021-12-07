import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Button,
  FlatList,
  Modal,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import ItemForm from "../single-components/itemForm";
import UpdateItemForm from "../single-components/updateItemForm";
import Check from "../single-components/CheckBox";
import UpdateScreen from "../../components/screens/Update";
import { Signout } from "../single-components/Signout";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen(props) {
  // const { key } = route.params; //Try to get these params from the update screen
  // const { name } = route.params; //Try to get these params from the update screen
  // console.log("Item name: " + name); //Just check the received data
  // console.log("Item key: " + key);

  const navigation = useNavigation();
  const [listData, setListData] = useState();

  const [modalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [itemArray, setItemArray] = useState([]);
  const [updatedArray, setUpdatedArray] = useState([]);
  const [appInit, setAppInit] = useState(true);

  const [nameItemToUpdate, setNameItemToUpdate] = useState();
  const [keyItemToUpdate, setKeyItemToUpdate] = useState();

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

  useEffect(() => {
    if (!props.auth) {
      navigation.reset({ index: 0, routes: [{ name: "Login" }] });
    }
  }, [props.auth]);
  useEffect(() => {
    setListData(props.data);
    console.log(listData);
  }, [props.data]);

  const data = { time: new Date().getTime(), email: Math.random() * 100 };
  //const data = { name: "Simone", email: props.user.email };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.time}</Text>
    </View>
  );

  //Method that add an item into the array
  const addItem = (item) => {
    item.key = Math.random().toString();
    setItemArray((currentItem) => {
      return [item, ...currentItem];
    });
    console.log("item added: ", item);

    setAddModalOpen(false);
  };

  //Trying to update items
  const updateItem = (key, newName) => {
    console.log("Key of item to be update", key);
    console.log("Item name to be updated : " + newName);
    setNameItemToUpdate(newName);
    setKeyItemToUpdate(key);
    //-----------------------------------
    const index = itemArray.findIndex((el) => el.key === key);
    itemArray[index] = {
      key: key,
      name: newName,
    };
    console.log("Object at index: ", itemArray[index]);
    let newArray = itemArray;
    setItemArray(newArray);
    console.log("Array: ", itemArray);
    setUpdatedArray(newArray);
    //-----------------------------------
  };

  //Method that delete a single item from the list when the user long-presses the item
  const deleteItem = (key, name) => {
    console.log("Key of item to be deleted: " + key);
    console.log("Item name to be deleted : " + name);
    const newArray = itemArray.filter((item) => item.key !== key);
    setItemArray(newArray);
  };
  //Method that delete all the items into the array when a button is pressed
  const deleteAllItems = () => {
    Alert.alert("Alert", "Do you want to delete all the items?", [
      {
        text: "Confirm",
        onPress: () => setItemArray([]),
      },
      {
        text: "Cancel",
      },
    ]);
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
      {/* <View>
        <Text>{props.user.email}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.add(data);
          }}
        >
          <Text>Add something</Text>
        </TouchableOpacity>
      </View> */}
      {/* Add Modal */}
      <Modal visible={modalOpen} animationType="slide">
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              onPress={() => setAddModalOpen(false)}
              name="arrow-back"
              size={28}
              color="black"
              style={{ marginTop: 50, marginBottom: 15 }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 25,
                marginTop: 30,
              }}
            >
              Add item
            </Text>
          </View>
          <ItemForm addItem={addItem} />
        </View>
      </Modal>
      {/* Update modal */}
      <Modal visible={updateModalOpen} animationType="slide">
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              onPress={() => setUpdateModalOpen(false)}
              name="arrow-back"
              size={28}
              color="black"
              style={{ marginTop: 50, marginBottom: 15 }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 25,
                marginTop: 30,
              }}
            >
              Update item
            </Text>
          </View>
          <UpdateItemForm
            updateItem={updateItem}
            itemName={nameItemToUpdate}
            itemKey={keyItemToUpdate}
          />
        </View>
      </Modal>
      {/* <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => item.time}
      /> */}
      <FlatList
        data={itemArray}
        // data={updatedArray.length >= 0 ? updatedArray : itemArray}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          console.log("Item rendered", item),
          (
            <TouchableOpacity
              style={styles.itemButton}
              //onPress={() => navigation.navigate("Update Item", item)} //Send the object selected to the update screen
              onPress={() => {
                setUpdateModalOpen(true);
                updateItem(item.key, item.name);
                //updateItem(item);
                console.log("Item to update: ", item);
              }}
              onLongPress={() => deleteItem(item.key, item.name)}
              update={updateItem}
              //item={item}
            >
              <Text style={styles.text}>{item.name}</Text>
              <Check />
            </TouchableOpacity>
          )
        )}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.deleteAllBtn}
          onPress={() => deleteAllItems()}
        >
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            Delete all
          </Text>
        </TouchableOpacity>
        {/* <UpdateScreen updateItem={updateItem} /> */}
        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons
            style={{ color: "white" }}
            name="add"
            size={50}
            onPress={() => setAddModalOpen(true)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "white",
    //backgroundColor: "#D0E7FF",
  },
  itemButton: {
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
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 10,
    elevation: 6,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteAllBtn: {
    backgroundColor: "dodgerblue",
    borderRadius: 20,
    maxHeight: 50,
    padding: 12,
    elevation: 6,
  },
});
