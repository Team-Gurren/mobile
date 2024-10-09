import { Platform } from "react-native";
export default {
  COLORS: {
    BACKGROUND: "#EFC25B",
    WHITE: "#FFFFFF",
    BROWN: "#B78718",
    BROWN_LIGHT: "#4D433A",
    BROWN_DARK: "#492403",
    RED: "#FF0F3F",
  },

  // BACKGROUND: "#292F37",
  // WHITE: "#FFFFFF",
  // GREEN: "#4E9F3D",
  // GREY_DARK: "#40454E",
  // GREY_LIGHT: "#93979D",
  // RED: "#FF0F3F",

  // BACKGROUND: "#b4b4b4",
  // WHITE: "#FFFFFF",
  // GREY_DARK: "#3a3a3a",
  // GREY_LIGHT: "#93979D",

  FONT_FAMILY: {
    REGULAR: "BodoniModa_400Regular",
    SEMIBOLD: "BodoniModa_600SemiBold",
    BOLD: "BodoniModa_700Bold",
  },

  FONT_SIZE: {
    SMALL: 18,
    MEDIUM: Platform.OS === "ios" ? 24 : 20,
    LARGE: 32,
  },
};
