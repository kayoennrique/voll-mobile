import { Patient } from "../interfaces/Patient";
import api from "./api";

export async function registerPatient(patient: Patient) {
  if (!patient) return null;

  try {
    const result = await api.post('/paciente', patient);
    console.log(result.data);
    return result.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPatientData(id: string) {
  try {
    const result = await api.get(`/paciente/${id}`);
    return result.data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}