import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { Logo } from "../../components/Logo";
import { Login } from "../../components/Login";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Login />
      <Button title="Esqueceu sua Matrícula?" type="secondary" style={{marginTop: "30%"}}/>
    </SafeAreaView>
  )
}