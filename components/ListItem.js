import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const ListItem = ({ title, icon, bg, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={{ ...styles.image, backgroundColor: bg }}>
          <Feather name={icon} size={25} color="white" />
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <Feather name="chevron-right" size={26} color="#707070" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    paddingHorizontal: 15,
  },
  txtContainer: {
    flex: 1,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 25,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  email: {
    fontSize: 16,
    fontWeight: "400",
    color: "#707070",
  },
});
