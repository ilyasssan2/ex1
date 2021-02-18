import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../config/colors";

const MyBtn = ({ title, type, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          ...styles.BtnContainer,
          backgroundColor: type === "s" ? colors.primaryO : colors.primary,
        }}
      >
        <Text
          style={{
            ...styles.txt,
            color: type === "s" ? colors.primary : "white",
          }}
        >
          {" "}
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyBtn;

const styles = StyleSheet.create({
  BtnContainer: {
    height: 50,
    marginVertical: 0,
    paddingLeft: 15,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 18,
    margin: 0,
  },
});
