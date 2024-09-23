import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: theme.COLORS.GREY_DARK,
    width: 300,
    height: 270,
    borderRadius: 20,
  },
  text: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.SMALL,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD
  },
});
