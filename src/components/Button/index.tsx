import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";


type ButtonProps = {
  title: string;
  type?: "primary" | "secondary";
} & TouchableOpacityProps

export function Button({ title, type = 'primary', style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      delayPressIn={50}
      delayPressOut={50}
      style={[
        styles.container,
        type === 'primary' ? styles.primary : styles.secondary,
        style
      ]}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}