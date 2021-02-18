import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { colors } from "../config/colors";

const Loding = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.txt}>. . .</Text>
    </View>
  );
};

export default Loding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 120,
    color: "white",
  },
});
