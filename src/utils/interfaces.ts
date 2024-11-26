export interface User {
  id: number;
  publicID: string;
  nome: string;
  matricula: string;
  turma: string;
  cpf: string;
  dataNascimento: string; // Pode ser do tipo string ou Date, dependendo de como você quer manipular a data
  telefone: string;
  endereco: string;
  criadoEm: string; // Pode ser do tipo string ou Date, dependendo de como você quer manipular a data
  atualizadoEm: string; // Pode ser do tipo string ou Date, dependendo de como você quer manipular a data
}
