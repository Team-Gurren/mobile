import { KeyboardAvoidingView, Platform, TextInput, TextInputProps } from "react-native";


import theme from "../../theme";
import { styles } from "./styles";

export function Input({ ...rest }: TextInputProps) {

  return (
    // dps usar o onChangeText para pegar o valor do input e salvar em um estado
    <TextInput
      style={styles.textInput}
      cursorColor={theme.COLORS.GREY_DARK}
      {...rest}
    />
  )
}