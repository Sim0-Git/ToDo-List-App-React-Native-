import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  CheckBox,
} from "react-native";

export default function Check() {
  const [isSelected, setSelection] = useState(false);

  return (
    <TouchableOpacity>
      <CheckBox
        style={styles.checkBox}
        value={isSelected}
        onValueChange={setSelection}
        //containerStyle={{ backgroundColor: "white" }}
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
