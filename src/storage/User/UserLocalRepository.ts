import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  age: number;
  class: string;
  id: number;
  lastName: string;
  name: string;
  password: string;
  userId: number;
}

interface ApiResponse {
  qrCode: string;
}

export class UserLocalRepository {
  async SetUserData(userData: User, qrCode: ApiResponse) {
    try {
      const existingData = await this.GetUserData();
      if (existingData) {
        console.log("User data already exists. Removing existing data.");
        await this.RemoveUserData();
      }
      const userDataString = JSON.stringify({ userData, qrCode });
      await AsyncStorage.setItem("@userData", userDataString);
      console.log("User data saved successfully.");
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
    }
    return null; // Return null instead of an empty object for clarity
  }

  async RemoveUserData() {
    try {
      await AsyncStorage.removeItem("@userData");
      console.log("User data removed successfully.");
    } catch (e) {
      console.error("Error removing user data:", e);
    }
  }
}
