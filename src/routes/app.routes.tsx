import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { ForgetMyLogin } from "../screens/ForgetMyLogin";

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator
      screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="ForgetMyLogin" component={ForgetMyLogin} />

    </Navigator >
  )
}
