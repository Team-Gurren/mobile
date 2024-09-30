import { ActivityIndicator, View, ViewProps } from "react-native";
import { styles } from "./styles";
import Theme from "../../theme";


export function Loading({ style }: ViewProps) {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="large" color={Theme.COLORS.GREEN} />
    </View>
  )
}