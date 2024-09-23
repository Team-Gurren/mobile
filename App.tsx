import { View } from 'react-native';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans'
import Theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold })
  
  return (
    <View style={{ flex: 1, backgroundColor: Theme.COLORS.BACKGROUND }}>
      {!fontsLoaded ? <Routes /> : <Loading />}
    </View>
  )
}
