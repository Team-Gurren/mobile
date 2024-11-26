import axios, { AxiosError } from "axios";
import Config from "../configs/app.config"; // Ajuste o caminho conforme necessário
import { UserLocalRepository } from "../storage/User/UserLocalRepository";

const userStorage = new UserLocalRepository();
export class AuthMiddleware {
  async GetAlunoByMatricula(matricula: string) {
    const { apiUrl } = Config;

    try {
      const response = await axios.get(
        apiUrl + `/aluno/matricula/${matricula}`
      );
      userStorage.SetUserData(response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && error.response.status === 404) {
          return { error: "Matrícula incorreta" };
        }
        console.error(
          "Erro ao buscar dados do aluno:",
          error.response?.data || error.message
        );
        return { error: "Erro ao buscar dados do aluno" };
      }

      console.error("Erro desconhecido:", error);
      return { error: "Erro desconhecido" };
    }
  }
}
