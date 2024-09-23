import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 60,
    borderRadius: 40,
  },
  primary: {
    backgroundColor: theme.COLORS.GREEN,
    // estilo para o tipo "primary"
  },
  secondary: {
    backgroundColor: theme.COLORS.GREY_DARK, // estilo para o tipo "secondary"
  },
  title: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.SMALL,

  },
});
