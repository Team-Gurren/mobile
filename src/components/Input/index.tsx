import { TextInput } from "react-native";


import theme from "../../theme";
import { styles } from "./styles";

export function Input() {
  return (
    <TextInput cursorColor={theme.COLORS.GREY_DARK} style={styles.textInput}>

    </TextInput>
  )
}