import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../Screens/User/User";
import EditProfile from "../Screens/User/EditProfile";
const Stack = createStackNavigator();
function UserNavigator() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="user"
        options={{ title: "User Area" }}
        component={User}
      />
      <Stack.Screen name="editProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default UserNavigator;
