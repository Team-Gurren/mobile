import { View } from 'react-native';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { BodoniModa_400Regular, BodoniModa_600SemiBold, BodoniModa_700Bold, useFonts } from '@expo-google-fonts/bodoni-moda'
import Theme from './src/theme';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({ BodoniModa_400Regular, BodoniModa_600SemiBold, BodoniModa_700Bold })

  return (
    <View style={{ flex: 1, backgroundColor: Theme.COLORS.BACKGROUND }}>
      <StatusBar backgroundColor='transparent' translucent style={'light'} />

      {fontsLoaded ? <Routes /> : <Loading style={{ flex: 1 }} />}
    </View>
  )
}
