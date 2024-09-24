import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";
import { useEffect, useState } from "react";

// Definindo as interfaces para os dados do usuário
interface User {
  age: number;
  class: string;
  id: number;
  lastName: string;
  name: string;
  password: string;
  userId: number;
}

interface ApiResponse {
  userData: User;
  qrCode: string;
}

export function Home() {
  const [userData, setUserData] = useState<User | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const UserLocalRepo = new UserLocalRepository();

  useEffect(() => {
    const fetchUserData = async () => {
      const data: ApiResponse | null = await UserLocalRepo.GetUserData();
      if (data && data.userData) {
        const { qrCode, userData: user } = data;
        setUserData(user);
        setQrCode(qrCode);
      }
    };

    fetchUserData();
  }, []);

  console.log(userData);

  return (
    <SafeAreaView style={styles.container}>
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
