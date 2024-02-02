export interface Patient {
  cpf: string;
  nome: string;
  email: string;
  endereco: Address;
  senha: string;
  telefone: string;
  possuiPlanoSaude: boolean;
  planosSaude?: number[];
  imagem?: string;
}

export interface Address {
  cep: string;
  rua: string;
  numero: number;
  complemento?: string;
  estado: string;
}