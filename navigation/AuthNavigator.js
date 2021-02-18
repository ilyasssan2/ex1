import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Auth/Login";
import SignUp from "../Screens/Auth/SignUp";
const Stack = createStackNavigator();
function AuthNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
