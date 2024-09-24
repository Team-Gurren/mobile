import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { Logo } from "../../components/Logo";
import { Login } from "../../components/Login";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const [loginStatus, setLoginStatus] = useState(true);

  const userLocalRepo = new UserLocalRepository();
  const navigation = useNavigation();

  useEffect(() => {
    checkUserDataExists();
  }, []);

  async function checkUserDataExists() {
    if (await userLocalRepo.GetUserData()) {
      navigation.navigate("Home");
    }
  }

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        {/* Envolvendo apenas a logo e o login dentro do KeyboardAvoidingView */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.avoidingView}
          keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
        >
          <Logo />
          <Login
            loginTitle="Digite sua Matrícula"
            passwordTitle="Digite sua Data de Nascimento"
            loginStatus={setLoginStatus}

          />
          {loginStatus ? null : (
            <Text style={styles.errorMessage}>Dados incorretos.</Text>
          )}
        </KeyboardAvoidingView>



        <Button
          title="Esqueceu sua Matrícula?"
          type="secondary"
          style={loginStatus ? styles.button : styles.missing}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
