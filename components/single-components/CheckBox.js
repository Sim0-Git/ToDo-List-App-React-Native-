import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
//import CheckBox from "expo-checkbox";

export default function Check() {
  const [isSelected, setSelection] = useState(false);

  return (
    <TouchableOpacity>
      <CheckBox
        style={styles.checkBox}
        value={isSelected}
        onValueChange={setSelection}
        tintColors={{ true: "white", false: "red" }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    marginLeft: 10,
  },
});
