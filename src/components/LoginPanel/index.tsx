import { useState } from "react";
import { Keyboard, Text, TextInputProps, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AuthMiddleware } from "../../services/auth.middleware";
import { Input } from "../Input";
import { Button } from "../Button";
import { Panel } from "../Panel";
import { SignInScreenNavigationProp } from "../../utils/types";

type LoginProps = {
  loginTitle: string;
  loginStatus: (status: boolean) => void;
  loadingStatus: (status: boolean) => void;
} & TextInputProps;

export function LoginPanel({ loginTitle, loginStatus, loadingStatus }: LoginProps) {
  const [matricula, setMatricula] = useState('');
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const auth = new AuthMiddleware();

  async function handleOnPress() {
    loadingStatus(true);
    const userData = await auth.GetAlunoByMatricula(matricula);
    if (userData) {
      loadingStatus(false);
      loginStatus(true);
      navigation.replace("Home");
    } else {
      Keyboard.dismiss();
      loginStatus(false);
      setTimeout(() => { loadingStatus(false) }, 1000)
    }
  }

  return (
    <Panel style={styles.container}>
      <Text style={styles.text}> {loginTitle}</Text>
      <Input
        inputMode="numeric"
        onChangeText={setMatricula}
      />
      <Button title="LOGIN" onPress={handleOnPress} style={{ paddingHorizontal: 40 }} />
    </Panel>
  );
}
