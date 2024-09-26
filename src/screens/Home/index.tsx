import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from "../../components/Button";
import { QrCode } from "../../components/QrCode";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";
import { User } from "../../utils/interfaces";
import { styles } from "./styles";

interface ApiResponse {
  userData: User;
}

export function Home() {
  const [userData, setUserData] = useState<User | null>(null);
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
    ? { Matricula: userData.userId, Nome: userData.name, Turma: userData.class }
    : null;

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Informações do Usuário" activeOpacity={1} />
      <Text>{userData ? `Bem-vindo, ${userData.name}!` : "Loading..."}</Text>
      {userData && qrCodeData ? (
        <QrCode qrCodeData={qrCodeData} />) : null}
    </SafeAreaView>
  );
}
