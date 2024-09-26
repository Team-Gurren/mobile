
import { View, ViewProps } from "react-native";
import { styles } from "./styles";

export function Panel({ style, ...rest }: ViewProps) {
  return (
    <View {...rest} style={[style, styles.container]}>
    </View >
  )
}