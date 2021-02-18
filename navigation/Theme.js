import React from "react";
import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../config/colors";
export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.bg,
  },
};
