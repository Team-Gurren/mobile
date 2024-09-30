import { Platform, StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: Platform.OS === "ios" ? 350 : "90%",
    height: Platform.OS === "ios" ? 300 : "35%",
    borderRadius: 20,
    marginBottom: "10%",
  },
  title: {
    textAlign: "center",
    padding: 10,
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.MEDIUM,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
  text: {
    padding: 15,
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.SMALL,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
});
