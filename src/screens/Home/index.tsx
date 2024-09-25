import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { User } from "../../utils/interfaces";


interface ApiResponse {
  userData: User;
  qrCode: string;
}

// Refatorar essa tipagem do null
export function Home() {
  const [userData, setUserData] = useState<User | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const userLocalRepo = new UserLocalRepository();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data: ApiResponse | null = await userLocalRepo.GetUserData();
    if (data && data.userData) {
      const { qrCode, userData: user } = data;
      setUserData(user);
      setQrCode(qrCode);
    }
  }

  //Criar o Componente Panel
  //Criar o Componente UserPanel(Tem que receber Data)
  //Criar o componente QrCode (Tem que receber uma string que tem o url do qrCode, ao clickar ele dar uma aumentada é dar blur no resto da tela)
  //Organizar os Componentes e estilizar a página
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Informações do Usuário" activeOpacity={1} />
      <Text>{userData ? `Bem vindo, ${userData.name}!` : "Loading..."}</Text>
      {qrCode ? (
        <Image
          source={{ uri: qrCode }}
          style={{ width: 200, height: 200 }}
        />
      ) : null}
    </SafeAreaView>
  );
}
