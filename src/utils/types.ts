import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RouteParams = {
  Home: undefined;
  SignIn: undefined;
  ForgetMyLogin: undefined;
};
export type SignInScreenNavigationProp = NativeStackNavigationProp<
  RouteParams
>;
