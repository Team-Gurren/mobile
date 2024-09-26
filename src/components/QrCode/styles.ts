// src/components/styles.ts
import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    zIndex: 1,
  },
  qrCodeWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
  blurContainer: {
    backgroundColor: theme.COLORS.BACKGROUND,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
});
