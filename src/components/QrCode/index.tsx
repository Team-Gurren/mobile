// src/components/QrCode.tsx
import React, { useState } from "react";
import { Platform, TouchableOpacity, TouchableOpacityProps } from "react-native";
import QRCode from "react-native-qrcode-svg"; // Importa o gerador de QR Code
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated"; // Importa o Reanimated
import { BlurView } from "expo-blur"; // Importa o BlurView
import { styles } from "./styles";
import { User } from "../../utils/interfaces";


interface QrCodeProps extends TouchableOpacityProps {
  qrCodeData: Partial<User>;
}

export function QrCode({ qrCodeData, ...rest }: QrCodeProps) {
  const [pressed, setPressed] = useState(false);
  const scale = useSharedValue(1); // Valor compartilhado para a escala

  const { name } = qrCodeData
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    setPressed((prev) => !prev);
    scale.value = withTiming(pressed ? 1 : Platform.OS === 'ios' ? 2 : 1.8, { duration: 350 }); // Aumenta ou reduz a escala
  };

  return (
    <>
      {pressed && (
        <BlurView intensity={1} style={styles.blurContainer} />
      )}
      <TouchableOpacity
        onPress={handlePress}
        style={styles.container}
        activeOpacity={1}
        {...rest}
      >
        <Animated.View style={[animatedStyle, styles.qrCodeWrapper]}>
          <QRCode
            value={JSON.stringify(name)}
            size={150}
          />
        </Animated.View>
      </TouchableOpacity>
    </>
  );
}
