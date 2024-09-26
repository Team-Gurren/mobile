import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: theme.COLORS.BACKGROUND,
  },
  title: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.MEDIUM,
    fontFamily: theme.FONT_FAMILY.BOLD,
    paddingBottom: 20,
  },
});
