import { View } from 'react-native';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans'
import Theme from './src/theme';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold })

  return (
    <View style={{ flex: 1, backgroundColor: Theme.COLORS.BACKGROUND }}>
      <StatusBar backgroundColor='transparent' translucent style={'light'} />

      {fontsLoaded ? <Routes /> : <Loading style={{ flex: 1 }} />}
    </View>
  )
}
