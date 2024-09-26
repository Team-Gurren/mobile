import { Platform, Text } from "react-native";
import { Panel } from "../Panel";
import { styles } from "./styles";

interface UserPanelProps {
  userData: {
    name: string;
    userId: number;
    class: string;
    age: number;
  }
}

export function UserPanel({ userData }: UserPanelProps) {
  return (
    <Panel style={styles.container}>
      <Text style={styles.title}>{userData.name}</Text>
      <Text style={styles.text}>Matrícula: {userData.userId}</Text>
      <Text style={styles.text}>Turma: {userData.class} </Text>
      <Text style={styles.text}>Idade: {userData.age} </Text>
    </Panel>
  )
}