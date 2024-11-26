import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/Button";
import { QrCode } from "../../components/QrCode";
import { UserLocalRepository } from "../../storage/User/UserLocalRepository";
import { User } from "../../utils/interfaces";
import { styles } from "./styles";
import { UserPanel } from "../../components/UserPanel";
import { ArrowLeft } from "phosphor-react-native"
import { useNavigation } from "@react-navigation/native";
import { SignInScreenNavigationProp } from "../../utils/types";

interface ApiResponse {
  userData: User;
}

export function Home() {
  const [userData, setUserData] = useState<User>();
  const userLocalRepo = new UserLocalRepository();

  const navigation = useNavigation<SignInScreenNavigationProp>();
  let qrCodeData = userData ? { userId: userData.matricula } : null;

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleOnPress = async () => {
    await userLocalRepo.RemoveUserData();
    navigation.replace("SignIn")
  }

  const fetchUserData = async () => {
    const data: ApiResponse | null = await userLocalRepo.GetUserData();
    if (data && data.userData) {
      setUserData(data.userData);
    }
  };

  return (
    userData && qrCodeData ? (

      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.leftArrow}
          onPress={handleOnPress}
        >
          <ArrowLeft weight="bold" color="white" size={30} />
        </TouchableOpacity>
        <View style={styles.body}>
          <Button
            title="Informações do Usuário"
            activeOpacity={1}
            style={{ marginBottom: 40 }}
          />
          <UserPanel userData={userData} />

          <QrCode qrCodeData={qrCodeData} />
          <Text style={styles.title}>Scaneie o QrCode</Text>
        </View>
      </SafeAreaView>
    ) : null
  );
}
