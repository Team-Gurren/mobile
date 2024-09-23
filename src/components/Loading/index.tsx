import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import Theme from "../../theme";

export function Loading() {
  return(
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Theme.COLORS.GREEN}/>
    </View>
  )
}