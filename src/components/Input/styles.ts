import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: theme.COLORS.GREY_LIGHT,
    marginVertical: 10,
    width: "90%",
    height: 40,
    borderRadius: 8,
    textAlign: "center",
    fontSize: theme.FONT_SIZE.SMALL,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: '#FFFFFF'
  },
});
