import api from "./api";

export async function scheduleConsultation(data: Date, expertId: string, patientId: string) {
  try {
    const result = await api.post('/consulta', {
      especialista: expertId,
      paciente: patientId,
      data: data
    })
    return result.data
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function cancelConsultation(queryId: string) {
  try {
    const resulta = await api.delete(`/consulta/${queryId}`)
    console.log(resulta.data)
    return resulta.data
  }
  catch (error) {
    console.log(error)
    return null
  }
}