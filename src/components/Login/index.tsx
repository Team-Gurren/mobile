import { Text, View } from "react-native";

import { styles } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";


export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite sua Matrícula</Text>
      <Input />
      <Text style={styles.text}> Digite sua Data de Nascimento </Text>
      <Input />
      <Button title="LOGIN"/>
    </View>
  )
}