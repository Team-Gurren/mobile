import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { Logo } from "../../components/Logo";
import { LoginPanel } from "../../components/LoginPanel";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../../components/Loading";
import theme from "../../theme";

export function SignIn() {
  const [loginStatus, setLoginStatus] = useState<Boolean>(true);
  const [loadingStatus, setLoadingStatus] = useState(false);

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
    loadingStatus ?
      <Loading style={styles.loading} />
      :
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.avoidingView}
            keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
          >
            <Logo />
            <LoginPanel
              loginTitle="Digite sua Matrícula"
              passwordTitle="Digite sua Data de Nascimento"
              loginStatus={setLoginStatus}
              loadingStatus={setLoadingStatus}
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
  )
}
