// src/components/QrCode.tsx
import React, { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import QRCode from "react-native-qrcode-svg"; // Importa o gerador de QR Code
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated"; // Importa o Reanimated
import { BlurView } from "expo-blur"; // Importa o BlurView
import { styles } from "./styles";

interface userData {
  Matricula: number;
  Nome: string;
  Turma: string;
}

interface QrCodeProps extends TouchableOpacityProps {
  qrCodeData: userData;
}

export function QrCode({ qrCodeData, ...rest }: QrCodeProps) {
  const [pressed, setPressed] = useState(false);
  const scale = useSharedValue(1); // Valor compartilhado para a escala


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    setPressed((prev) => !prev);
    scale.value = withTiming(pressed ? 1 : 1.7, { duration: 300 }); // Aumenta ou reduz a escala
  };

  return (
    <>
      {pressed && (
        <BlurView intensity={20} style={styles.blurContainer} />
      )}
      <TouchableOpacity
        onPress={handlePress}
        style={styles.container}
        activeOpacity={1}
        {...rest}
      >
        <Animated.View style={[animatedStyle, styles.qrCodeWrapper]}>
          <QRCode
            value={JSON.stringify(qrCodeData)}
            size={150}
          />
        </Animated.View>
      </TouchableOpacity>
    </>
  );
}
