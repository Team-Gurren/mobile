import { useEffect, useState } from "react";
import { Alert, Keyboard, Text, TextInputProps, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AuthMiddleware } from "../../services/auth.middleware";
import { Input } from "../Input";
import { Button } from "../Button";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";

type LoginProps = {
  loginTitle: string;
  passwordTitle: string;
  loginStatus: (status: boolean) => void; // Modificação no tipo
} & TextInputProps;

export function Login({ loginTitle, passwordTitle, loginStatus }: LoginProps) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const auth = new AuthMiddleware();
  const userLocalRepo = new UserLocalRepository();

  // Definindo loginStatus como null quando o componente monta
  useEffect(() => {
    loginStatus(true);
  }, [loginStatus]);

  // Função de login
  async function handleOnPress() {
    try {
      const userData = await auth.Login({ username, password });
      if (userData) {
        loginStatus(true);
        navigation.navigate('Home');
      }
    } catch (e) {
      Keyboard.dismiss()
      loginStatus(false);
      console.log('entrando aq')
      await userLocalRepo.RemoveUserData();
    }
  }

  return (

    <View style={styles.container}>
      <Text style={styles.text}>{loginTitle}</Text>
      <Input
        inputMode="numeric"
        onChangeText={setUserName}
      />
      <Text style={styles.text}>{passwordTitle}</Text>
      <Input
        inputMode="numeric"
        maxLength={8}
        onChangeText={setPassword}
      />
      <Button title="LOGIN" onPress={handleOnPress} />
    </View>

  );
}
