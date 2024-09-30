import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RouteParams = {
  Home: undefined;
  SignIn: undefined;
};
export type SignInScreenNavigationProp = NativeStackNavigationProp<
  RouteParams,
  "SignIn"
>;
