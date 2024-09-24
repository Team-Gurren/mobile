import axios from "axios";

type AuthProps = {
  username: String;
  password: String;
};
export class AuthMiddleware {
  async Login({ username, password }: AuthProps) {
    const token = await axios
      .post("http://192.168.2.11:8787/user/login", {
        userId: Number(username),
        password,
      })
      .then((response) => {
        return response.data.token;
      })
      .catch((error) => {
        return false;
      });

    const userData = await axios
      .get("http://192.168.2.11:8787/user/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
    return userData;
  }
}
