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