import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import theme from "../../theme";

interface BackGroundProps {
  children: ReactNode;
  type?: "PRIMARY" | "SECONDARY";
}

export function BackGround({ children, type = 'PRIMARY' }: BackGroundProps) {
  return (
    <LinearGradient
      colors={type === 'PRIMARY' ? [theme.COLORS.BACKGROUND, theme.COLORS.WHITE, theme.COLORS.BACKGROUND] : [theme.COLORS.BACKGROUND, theme.COLORS.WHITE]}

      style={{ flex: 1 }}

    >
      {children}
    </LinearGradient >
  );
}

