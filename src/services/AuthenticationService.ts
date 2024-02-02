import api from "./api";

export async function toDoLogin(email: string, senha: string) {
  if (!email || !senha) return null
  try {
    const result = await api.post('/auth/login', {
      email,
      senha
    });
    console.log(result.data);
    return result.data;

  } catch (error) {
    console.log(error);
    return null;
  }
}