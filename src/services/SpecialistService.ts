import api from "./api"


export async function searchSpecialistByState(estado: string, especialidade: string) {
  try {
    const resultado = await api.get('/especialista/busca', {
      params: {
        estado,
        especialidade
      }
    })
    return resultado.data
  }
  catch (error) {
    console.log(error)
    return null
  }
}