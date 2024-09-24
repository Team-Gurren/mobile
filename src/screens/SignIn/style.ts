import { StyleSheet, Platform } from "react-native";
import Theme from "../../theme";

const { COLORS, FONT_FAMILY, FONT_SIZE } = Theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Adiciona centralização vertical
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: 20, // Adiciona algum padding para prevenir cortes nas laterais
  },
  avoidingView: {
    justifyContent: "center", // Centraliza o conteúdo ao longo do eixo vertical
    alignItems: "center",
    marginBottom: 20,
  },
  errorMessage: {
    color: COLORS.RED,
    fontFamily: FONT_FAMILY.BOLD,
    marginTop: 20,
    fontSize: FONT_SIZE.SMALL,
    textAlign: "center",
  },
  missing: {
    marginTop: Platform.OS === 'ios' ? 20 : 17 ,
    marginBottom: 50,
  },
  button: {
    marginTop: Platform.OS === "ios" ? 60 : 60,
    marginBottom: 50,
  },
});
