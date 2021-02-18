import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../../config/colors";

const MyFormBtn = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableWithoutFeedback onPress={handleSubmit}>
      <View style={styles.BtnContainer}>
        <Text style={styles.txt}> {title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyFormBtn;

const styles = StyleSheet.create({
  BtnContainer: {
    height: 50,
    marginVertical: 15,
    paddingLeft: 15,
    backgroundColor: colors.primary,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: colors.primary,
  },
  txt: {
    color: "white",
    fontSize: 18,
    margin: 0,
  },
});
