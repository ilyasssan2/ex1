import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../config/colors";
import { useFormikContext } from "formik";
const MyImagePicker = ({ name }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  const images = values[name];

  const getAcces = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return alert(
        "this app will not work properly if you didnt allow us get access"
      );
    }
  };
  useEffect(() => {
    getAcces();
  }, []);
  const HandelImageInput = async () => {
    const res = await ImagePicker.launchImageLibraryAsync();

    if (res.uri) setFieldValue(name, [...images, res.uri]);
  };
  const RemoveImage = (image) => {
    Alert.alert(
      "Delete Image",
      "Are you sure you want to delete this image",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            setFieldValue(
              name,
              images.filter((xs) => xs !== image)
            );
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <View style={styles.imagesContainer}>
        {images &&
          images.map((xs) => (
            <TouchableWithoutFeedback
              onPress={RemoveImage.bind(this, xs)}
              key={xs}
            >
              <Image style={styles.myImage} source={{ uri: xs }} />
            </TouchableWithoutFeedback>
          ))}

        <TouchableWithoutFeedback onPress={HandelImageInput}>
          <View style={styles.InputContainer}>
            <Feather name="camera" size={60} style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {errors[name] && touched[name] ? (
        <Text style={styles.error}>{errors[name]}</Text>
      ) : null}
    </>
  );
};

export default MyImagePicker;

const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: "row",

    flexWrap: "wrap",
  },
  myImage: {
    height: 100,
    width: 100,
    borderRadius: 17,
    margin: 10,
    marginLeft: 0,
  },
  InputContainer: {
    marginVertical: 10,
    height: 100,
    width: 100,
    justifyContent: "center",
    backgroundColor: colors.primaryO,
    borderRadius: 17,
    flexDirection: "row",
    alignItems: "center",
    color: colors.primary,
  },
  icon: {
    color: colors.scondary,
  },
  error: {
    color: "red",
    fontSize: 14,
  },
});
