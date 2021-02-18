import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const UserProfile = ({ name, email, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={require("../assets/t1.jpg")} style={styles.image} />
        <View style={styles.txtContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Feather name="chevron-right" size={26} color="#707070" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  txtContainer: {
    flex: 1,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    fontSize: 16,
    fontWeight: "400",
    color: "#707070",
  },
});
