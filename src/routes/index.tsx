import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import Theme from "../theme";

export function Routes() {
  const { COLORS } = Theme

  return (
    // Melhor evitar então é bom deixar para não bugar a cor de fundo
    <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
