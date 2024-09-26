import { useEffect, useState } from "react";
import { Keyboard, Text, TextInputProps, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { styles } from "./styles";
import { AuthMiddleware } from "../../services/auth.middleware";
import { Input } from "../Input";
import { Button } from "../Button";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";
import { Panel } from "../Panel";

type LoginProps = {
  loginTitle: string;
  passwordTitle: string;
  loginStatus: (status: boolean) => void;
  loadingStatus: (status: boolean) => void;
} & TextInputProps;

export function LoginPanel({ loginTitle, passwordTitle, loginStatus, loadingStatus }: LoginProps) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const auth = new AuthMiddleware();
  const userLocalRepo = new UserLocalRepository();

  // Função para lidar com o clique
  async function handleOnPress() {
    loadingStatus(true);
    const userData = await auth.Login({ username, password });
    if (userData) {
      loadingStatus(false);
      loginStatus(true);
      navigation.navigate('Home');
    } else {
      Keyboard.dismiss();
      loginStatus(false);
      userLocalRepo.RemoveUserData();
      setTimeout(() => { loadingStatus(false) }, 1000)
    }
  }

  return (
    <Panel style={styles.container}>
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
    </Panel>
  );
}
