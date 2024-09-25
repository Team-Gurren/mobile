import { Image, View } from "react-native";
import { styles } from "./styles";

import img from "../../assets/logo.png";

export function Logo() {
  return (
    <View>
      <Image source={img} style={{ width: 270, height: 270 }} />
    </View>
  )
}