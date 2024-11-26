import { StyleSheet, Platform } from "react-native";
import Theme from "../../theme";

const { COLORS, FONT_FAMILY, FONT_SIZE } = Theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  avoidingView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  errorMessage: {
    color: COLORS.RED,
    fontFamily: FONT_FAMILY.BOLD,
    paddingTop: 30,
    fontSize: FONT_SIZE.SMALL,
    textAlign: "center",
  },
  missing: {
    marginTop: Platform.OS === "ios" ? 10 : 26,
    marginBottom: 40,
  },
  button: {
    marginTop: Platform.OS === "ios" ? 60 : 80,
    marginBottom: 40,
  },
  loadingStyleButton: {
    marginBottom: 39.8,
  },
  loading: {
    paddingTop: Platform.OS === "ios" ? 60 : 40,
  }
});
