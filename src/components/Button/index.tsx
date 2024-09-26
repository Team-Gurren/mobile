import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { styles } from "./styles";

type ButtonProps = {
  title: string;
  type?: "primary" | "secondary";
} & TouchableOpacityProps;

export function Button({ title, type = 'primary', style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      delayPressIn={20}
      delayPressOut={20}
      style={[
        styles.container,
        type === 'primary' ? styles.primary : styles.secondary, style
      ]}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>

  );
}
