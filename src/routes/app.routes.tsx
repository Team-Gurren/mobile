import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator >
  )
}
