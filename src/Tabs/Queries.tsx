import { Divider, ScrollView } from 'native-base'
import { CardConsultation } from '../components/CardConsultation'
import { Title } from '../components/Title'
import { Bud } from '../components/Button'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getConsultationsPatient } from '../services/PatientService'

interface Especialista {
  especialidade: string;
  id: string;
  nome: string;
  imagem: string;
}

interface Querie {
  data: string;
  especialista: Especialista;
  id: string;
}

export default function Queries() {
  const [upcomingConsultations, setUpcomingConsultations] = useState<Querie[]>([])
  const [pastQueries, setPastConsultations] = useState<Querie[]>([])

  useEffect(() => {
    async function loadQueries() {
      const patientId = await AsyncStorage.getItem('patientId')
      if (!patientId) return null
      const queries: Querie[] = await getConsultationsPatient(patientId)

      const now = new Date();
      const next = queries.filter((query) => new Date(query.data) > now)

      const past = queries.filter((query) => new Date(query.data) <= now)

      setUpcomingConsultations(next)
      setPastConsultations(past)
    }
    loadQueries()
  }, [])

  return(
    <ScrollView p="5">
      <Title color="blue.500">Minhas consultas</Title>
      <Bud mt={5} mb={5}>Agendar nova consulta</Bud>

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Title>
      {upcomingConsultations?.map((query) => (
        <CardConsultation 
          nome={query?.especialista?.nome}
          especialidade={query?.especialista?.especialidade}
          foto={query?.especialista?.imagem}
          data={query?.data}
          wasScheduled
          key={query.id}
        />
      )) }

      <Divider mt={5} />

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Title>
      {pastQueries?.map((query) => (
        <CardConsultation 
          nome={query?.especialista?.nome}
          especialidade={query?.especialista?.especialidade}
          foto={query?.especialista?.imagem}
          data={query?.data}
          wasAnswered
          key={query.id}
        />
      )) }
    </ScrollView>
  )
}