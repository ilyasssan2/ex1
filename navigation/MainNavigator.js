import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../config/colors";
import Home from "../Screens/Home";
import Post from "../Screens/Post";
import { Feather } from "@expo/vector-icons";
import UserNavigator from "./UserNavigator";
const Tab = createBottomTabNavigator();
function MainNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 13, padding: 0 },
        tabStyle: { justifyContent: "center" },
        // activeBackgroundColor: colors.primary,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.txt,
        style: { height: 55 },
        iconStyle: { paddingBottom: 0, margin: 0 },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Feather size={size} name="home" color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: "",
          tabBarButton: (props) => (
            <TouchableOpacity {...props}>
              <View style={style.MyIcon}>
                <Feather size={35} name="plus-circle" color="white" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Auth"
        component={UserNavigator}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ size, color }) => (
            <Feather size={size} name="user" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
const style = StyleSheet.create({
  MyIcon: {
    backgroundColor: colors.primary,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
    borderColor: "white",
    borderWidth: 10,
  },
});
