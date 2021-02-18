import React from "react";
import { StyleSheet, View } from "react-native";
import MyFormBtn from "../components/Form/MyFormBtn";
import MyImagePicker from "../components/Form/MyImagePicker";
import MyInput from "../components/Form/MyInput";
import MyScreen from "../components/MyScreen";
import { Formik } from "formik";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  city: Yup.string().required().label("City"),
  description: Yup.string().required().label("Description"),
  price: Yup.number().required().label("Price"),
  images: Yup.array().min(1).required(),
});
const Post = () => {
  const onSubmit = (z, { resetForm }) => {
    console.log(z);
    resetForm();
  };
  return (
    <MyScreen>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Formik
          initialValues={{
            title: "",
            price: "",
            city: "",
            description: "",
            images: [],
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <>
              <MyImagePicker name="images" />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "68%" }}>
                  <MyInput placeholder="title" name="title" />
                </View>
                <View style={{ width: "30%" }}>
                  <MyInput
                    placeholder="price"
                    keyboardType="numeric"
                    name="price"
                  />
                </View>
              </View>
              <MyInput placeholder="city" name="city" chevron />
              <MyInput placeholder="description" name="description" />
              <MyFormBtn title="Add" />
            </>
          )}
        </Formik>
      </ScrollView>
    </MyScreen>
  );
};

export default Post;

const styles = StyleSheet.create({});
