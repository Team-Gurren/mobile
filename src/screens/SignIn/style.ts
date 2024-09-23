import { StyleSheet } from "react-native";
import Theme from "../../theme";

const { COLORS } = Theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});
