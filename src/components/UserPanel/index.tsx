import { Text } from "react-native";
import { Panel } from "../Panel";
import { styles } from "./styles";
import { User } from "../../utils/interfaces";

interface UserPanelProps {
  userData: User
}

export function UserPanel({ userData }: UserPanelProps) {
  return (
    <Panel style={styles.container}>
      <Text style={styles.title}>{userData.nome}</Text>
      <Text style={styles.text}>Matrícula: {userData.matricula}</Text>
      <Text style={styles.text}>Turma: {userData.turma} </Text>
    </Panel>
  )
}