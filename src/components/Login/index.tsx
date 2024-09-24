import { Alert, Text, View } from "react-native";

import { styles } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthMiddleware } from "../../services/auth.middleware";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";


type LoginProps = {
  loginTitle: String;
  passwordTitle: String;
}

export const UserRepo = new UserLocalRepository()
export function Login({ loginTitle, passwordTitle, }: LoginProps) {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [signIn, setSignIn] = useState<{}>({})

  const navigation = useNavigation()
  const Auth = new AuthMiddleware()

  async function handleOnPress() {
    await setSignIn({ username, password })
    const userData = await Auth.Login({ username, password })
    const { user, qrCode } = userData

    await UserRepo.SetUserData(user, qrCode)
    await navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{loginTitle}</Text>
      <Input inputMode="numeric" onChangeText={setUserName} />
      <Text style={styles.text}>{passwordTitle}</Text>
      <Input inputMode="numeric" maxLength={8} onChangeText={setPassword} />
      <Button title="LOGIN" onPress={() => handleOnPress()} />
    </View>
  )
}
