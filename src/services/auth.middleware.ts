import axios from "axios";
import { UserLocalRepository } from "../storage/User/UserLocalRepository";
import Config from "../configs/app.config";

type AuthProps = {
  username: String;
  password: String;
};

// Arrumar o tipo de retorno e tratamento de Erros
export class AuthMiddleware {
  async Login({ username, password }: AuthProps) {
    const UserLocalRepo = new UserLocalRepository();
    const { apiUrl } = Config;
    const loginData = await axios
      .post(apiUrl + "/user/login", {
        userId: Number(username),
        password,
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });

    const userData = await axios
      .get(apiUrl + "/user/auth/me", {
        headers: { Authorization: `Bearer ${loginData.token}` },
      })
      .then(async (response) => {
        const { user } = response.data;
        await UserLocalRepo.SetUserData(user);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
    return userData;
  }
}
