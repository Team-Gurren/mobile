import { StyleSheet, Platform } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Platform.OS === "ios" ? 350 : 300,
    paddingVertical: 20,
    borderRadius: 20,
  },
  text: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.SMALL,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
});
