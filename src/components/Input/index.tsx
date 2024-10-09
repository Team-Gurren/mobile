import { TextInput, TextInputProps } from "react-native";


import theme from "../../theme";
import { styles } from "./styles";

export function Input({ ...rest }: TextInputProps) {

  return (
    <TextInput
      style={styles.textInput}
      cursorColor={theme.COLORS.BROWN_DARK}
      {...rest}
    />
  )
}