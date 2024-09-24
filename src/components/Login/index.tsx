import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AuthMiddleware } from "../../services/auth.middleware";
import { Input } from "../Input";
import { Button } from "../Button";

type LoginProps = {
  loginTitle: string;
  passwordTitle: string;
}

export function Login({ loginTitle, passwordTitle }: LoginProps) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const Auth = new AuthMiddleware();

  async function handleOnPress() {
    try {
      const userData = await Auth.Login({ username, password });
      userData ? navigation.navigate('Home') : Alert.alert('Erro', 'Usuário ou senha inválidos');
    } catch (e) {
      console.error(e);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
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
        secureTextEntry={true}
      />
      <Button title="LOGIN" onPress={handleOnPress} />
    </View>
  );
}
