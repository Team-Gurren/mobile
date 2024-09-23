import { Text, View } from "react-native";

import { styles } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";

type LoginProps = {
  loginTitle: String;
  passwordTitle: String;
}

export function Login({ loginTitle, passwordTitle }: LoginProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{loginTitle}</Text>
      <Input inputMode="numeric" />
      <Text style={styles.text}>{passwordTitle}</Text>
      <Input inputMode="numeric" maxLength={8} />
      <Button title="LOGIN" />
    </View>
  )
}
