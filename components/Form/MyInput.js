import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../config/colors";
import { Feather } from "@expo/vector-icons";
import { useFormikContext } from "formik";

const MyInput = ({ name, icon, chevron, ...props }) => {
  const {
    handleChange,
    errors,
    touched,
    values,
    setFieldTouched,
  } = useFormikContext();
  return (
    <>
      <View style={styles.InputContainer}>
        {icon && <Feather name={icon} size={20} style={styles.icon} />}
        <TextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          value={values[name]}
          style={{ flex: 1, fontSize: 16 }}
          {...props}
        />
        {chevron && (
          <Feather name="chevron-down" size={24} style={styles.icon} />
        )}
      </View>
      {touched[name] && errors[name] && (
        <Text style={styles.error}>{errors[name]}</Text>
      )}
    </>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  InputContainer: {
    marginVertical: 10,
    height: 50,
    paddingLeft: 15,
    backgroundColor: colors.primaryO,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    color: colors.primary,
  },
  icon: {
    marginRight: 12,
    color: colors.scondary,
  },
  error: {
    color: "red",
    fontSize: 14,
  },
});
