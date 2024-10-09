import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../utils/interfaces";

export class UserLocalRepository {
  async SetUserData(userData: User) {
    try {
      const userDataString = JSON.stringify({ userData });
      await AsyncStorage.setItem("@userData", userDataString);
    } catch (e) {
      console.error("Error setting user data:", e);
    }
  }

  async GetUserData() {
    try {
      const userDataString = await AsyncStorage.getItem("@userData");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        return userData;
      }
    } catch (e) {
      console.error("Error getting user data:", e);
      return null;
    }
  }

  async RemoveUserData() {
    try {
      await AsyncStorage.removeItem("@userData");
    } catch (e) {
      console.error("Error removing user data:", e);
    }
  }
}
