import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { Logo } from "../../components/Logo";
import { Login } from "../../components/Login";
import { Button } from "../../components/Button";

export function SignIn() {

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          <Logo />
          <Login
            loginTitle='Digite sua Matrícula'
            passwordTitle='Digite sua Data de Nascimento'
          />
          <Button
            title="Esqueceu sua Matrícula?"
            type="secondary"
            style={{ marginTop: "30%" }}
          />

        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}