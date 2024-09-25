import { StyleSheet,Platform } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: theme.COLORS.GREY_DARK,
    width: Platform.OS === 'ios'? 350 : 300,
    height: Platform.OS === 'ios'? 300: 270,
    borderRadius: 20,
  },
  text: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.SMALL,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD
  },
});
