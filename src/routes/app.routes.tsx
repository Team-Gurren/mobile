import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator >
  )
}
