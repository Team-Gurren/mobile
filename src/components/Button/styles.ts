import { Platform, StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? "5%" : 5,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 60,
    borderRadius: 20,
  },
  primary: {
    backgroundColor: theme.COLORS.BROWN,
    // estilo para o tipo "primary"
  },
  secondary: {
    backgroundColor: theme.COLORS.BROWN_DARK, // estilo para o tipo "secondary"
  },
  title: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.MEDIUM,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
});
