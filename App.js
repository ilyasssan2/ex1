import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { Theme } from "./navigation/Theme";
import { fireAuth } from "./config/firebase";
import Loading from "./Screens/Loding";
export default function App() {
  const [user, setUser] = useState(false);
  const [loaded, setLoded] = useState();
  useEffect(() => {
    fireAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(true);
        setLoded(true);
      } else {
        setUser(false);
        setLoded(true);
      }
    });
  }, []);
  return (
    <>
      {loaded ? (
        <NavigationContainer theme={Theme}>
          {user ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}
