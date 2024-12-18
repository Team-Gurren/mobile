import { Platform, StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: 10,
    marginBottom: Platform.OS === 'ios'?  15: null,
    width: "90%",
    height: 40,
    borderRadius: 8,
    textAlign: "center",
    fontSize: theme.FONT_SIZE.SMALL,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.BROWN_LIGHT
  },
});
