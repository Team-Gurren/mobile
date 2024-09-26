import { ActivityIndicator, View, ViewProps } from "react-native";
import { styles } from "./styles";
import Theme from "../../theme";

export function Loading({ ...rest }: ViewProps) {
  return (
    <View style={[styles.container, rest.style]}>
      <ActivityIndicator size="large" color={Theme.COLORS.GREEN} />
    </View>
  )
}