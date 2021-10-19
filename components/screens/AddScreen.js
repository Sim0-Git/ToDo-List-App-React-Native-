import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  FlatList,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ItemForm from "../single-components/itemForm";

export function AddScreen2({ navigation }) {
  const [modalOpen, setmodalOpen] = useState(false);
  const [itemArray, setItemArray] = useState([]);

  const addItem = (item) => {
    item.key = Math.random().toString();
    setItemArray((currentItem) => {
      return [item, ...currentItem];
    });
    setmodalOpen(false);
  };
  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
        <View>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setmodalOpen(false)}
          />
          {/* <Text>Modal popup</Text> */}
          <ItemForm addItem={addItem} />
        </View>
      </Modal>
      <MaterialIcons name="add" size={24} onPress={() => setmodalOpen(true)} />
      <FlatList
        data={itemArray}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Home", item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
