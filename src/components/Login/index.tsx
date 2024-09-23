import { Text, View } from "react-native";

import { styles } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";


type LoginProps = {
  loginTitle: String;
  passwordTitle: String;
}

export function Login({ loginTitle, passwordTitle, }: LoginProps) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [signIn, setSignIn] = useState<{}>({})

  function handleOnPress() {
    setSignIn({ login, password })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{loginTitle}</Text>
      <Input inputMode="numeric" onChangeText={setLogin} />
      <Text style={styles.text}>{passwordTitle}</Text>
      <Input inputMode="numeric" maxLength={8} onChangeText={setPassword} />
      <Button title="LOGIN" onPress={() => handleOnPress()} />
    </View>
  )
}
