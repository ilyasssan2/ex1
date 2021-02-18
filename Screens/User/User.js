import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StatusBar, StyleSheet, FlatList, View } from "react-native";
import ListItem from "../../components/ListItem";
import MyScreen from "../../components/MyScreen";
import UserProfile from "../../components/UserProfile";
import { colors } from "../../config/colors";
import { fireAuth, fireStore } from "../../config/firebase";

const User = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    fullname: "",
  });
  const List = [
    {
      title: "my posts",
      bg: colors.primary,
      icon: "list",
      path: "hello",
    },
    {
      title: "My messages",
      bg: "tomato",
      icon: "message-square",
      path: "why",
    },
  ];
  const goTo = (path) => {
    navigation.navigate(path);
  };
  const LogOut = async () => {
    await fireAuth.signOut();
  };
  const getCurrentUserData = async () => {
    const data = await fireStore.collection("Users").get();
    data.forEach((xs) => {
      if (
        String(xs.data().email).toLocaleLowerCase() ==
        fireAuth.currentUser.email
      ) {
        setCurrentUser({
          email: xs.data().email,
          fullname: xs.data().fullname,
        });
      }
    });
  };
  useEffect(() => {
    getCurrentUserData();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primaryO} barStyle="dark-content" />
      <UserProfile
        name={currentUser.fullname}
        email={currentUser.email}
        onPress={goTo.bind(this, "editProfile")}
      />
      <View style={styles.ItemsContainer}>
        <FlatList
          data={List}
          keyExtractor={(x) => x.path}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              bg={item.bg}
              icon={item.icon}
              onPress={() => console.log(item.path)}
            />
          )}
        />
      </View>
      <View style={styles.logOutContainer}>
        <ListItem
          title="Log Out"
          bg="#fff591"
          icon="log-out"
          onPress={LogOut}
        />
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryO,
    flex: 1,
    paddingTop: 30,
  },
  ItemsContainer: {
    marginTop: 70,
    backgroundColor: "white",
  },
  logOutContainer: {
    marginTop: 40,
    backgroundColor: "white",
  },
});
