import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import MyFormBtn from "../../components/Form/MyFormBtn";
import MyInput from "../../components/Form/MyInput";
import { Formik } from "formik";
import * as Animatable from "react-native-animatable";
import * as Yup from "yup";
import { colors } from "../../config/colors";
import MyBtn from "../../components/MyBtn";
import { fireAuth } from "../../config/firebase";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
const Login = ({ navigation }) => {
  const onSubmit = (z, { resetForm }) => {
    fireAuth
      .signInWithEmailAndPassword(z.email, z.password)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
    resetForm();
  };
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <View style={{ backgroundColor: colors.primary, flex: 1 }}>
        <View style={styles.top}>
          <Text style={styles.title}>Welcome !</Text>
        </View>
        <Animatable.View style={styles.form} animation="fadeInUpBig">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <>
                <MyInput
                  placeholder="Email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  icon="at-sign"
                  name="email"
                />
                <MyInput
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
                  icon="lock"
                  name="password"
                />
                <MyFormBtn title="Login" />
                <MyBtn
                  type="s"
                  title="Sign Up"
                  onPress={() => navigation.navigate("signUp")}
                />
              </>
            )}
          </Formik>
        </Animatable.View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "white",
  },
  top: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  form: {
    flex: 2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
