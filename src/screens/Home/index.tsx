import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from "../../components/Button";
import { QrCode } from "../../components/QrCode";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";
import { User } from "../../utils/interfaces";
import { styles } from "./styles";
import { UserPanel } from "../../components/UserPanel";

interface ApiResponse {
  userData: User;
}

export function Home() {
  const [userData, setUserData] = useState<User>();
  const userLocalRepo = new UserLocalRepository();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data: ApiResponse | null = await userLocalRepo.GetUserData();
    if (data && data.userData) {
      setUserData(data.userData);
    }
  };

  // Dados para o QR Code (concatenando matrícula, nome e turma)
  const qrCodeData = userData
    ? { userId: userData.userId, name: userData.name, class: userData.class }
    : null;

  return (
    userData && qrCodeData ? (
      <SafeAreaView style={styles.container}>
        <Button
          title="Informações do Usuário"
          activeOpacity={1}
          style={{ marginBottom: 20 }}
          onPress={() => userLocalRepo.RemoveUserData()}
        />
        <UserPanel userData={userData} />
        <Text style={styles.title}>Scaneie o QrCode</Text>

        <QrCode qrCodeData={qrCodeData} />
      </SafeAreaView>
    ) : null
  );
}
