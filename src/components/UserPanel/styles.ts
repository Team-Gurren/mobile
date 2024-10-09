import { Platform, StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: Platform.OS === "ios" ? 350 : "90%",
    height: Platform.OS === "ios" ? 240 : "32%",
    borderRadius: 20,
    marginBottom: "20%",
  },
  title: {
    textAlign: "center",
    padding: 10,
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.LARGE,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  text: {
    padding: 10,
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.SMALL,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
});
