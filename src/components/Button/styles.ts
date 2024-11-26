import { Platform, StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? "5%" : 5,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  primary: {
    backgroundColor: theme.COLORS.BROWN,
    marginTop: 20,
  },
  secondary: {
    backgroundColor: theme.COLORS.BROWN_DARK,
  },
  title: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.MEDIUM,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});
