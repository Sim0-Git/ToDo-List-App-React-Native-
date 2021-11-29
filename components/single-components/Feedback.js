import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";

export function Feedback(props) {
  return (
    <View>
      <Text>{props.message}</Text>
    </View>
  );
}
