import { Platform, StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND
  },
  leftArrow: {
    justifyContent: "center",
    paddingHorizontal: Platform.OS === "ios" ? 20 : 20,
    marginTop: Platform.OS === "ios" ? 10 : 55,
    marginBottom: Platform.OS === "ios" ? null : 20,
    width: 70,
  },
  body: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 30 : 0,
    paddingHorizontal: Platform.OS === "ios" ? 20 : 10,
    alignItems: "center",
  },
  title: {
    color: theme.COLORS.BROWN_LIGHT,
    fontSize: theme.FONT_SIZE.LARGE,
    fontFamily: theme.FONT_FAMILY.BOLD,
    paddingTop: 20,
  },
});
