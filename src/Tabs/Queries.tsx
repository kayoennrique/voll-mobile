import { Divider, ScrollView, useToast } from 'native-base'
import { CardConsultation } from '../components/CardConsultation'
import { Title } from '../components/Title'
import { Bud } from '../components/Button'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getConsultationsPatient } from '../services/PatientService'
import { cancelConsultation } from '../services/ConsultationService'
import { NavigationProps } from '../@types/navigation'
import { useIsFocused } from '@react-navigation/native'
import { convertDataToString } from '../utils/conversions'

interface Specialist {
  nome: string,
  imagem: string,
  especialidade: string,
  id: string;
}

interface Querie {
  data: string;
  especialista: Specialist;
  id: string;
}

export default function Queries({ navigation }: NavigationProps<'Consultas'>) {
  const [upcomingConsultations, setUpcomingConsultations] = useState<Querie[]>([])
  const [pastQueries, setPastConsultations] = useState<Querie[]>([])
  const [recharge, setReload] = useState(false);
  const toast = useToast();
  const isFocused = useIsFocused();

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
  }, [isFocused, recharge])

  async function cancel(queryId: string) {
    const resultado = await cancelConsultation(queryId);
    if (resultado) {
      toast.show({
        title: 'Consulta cancelada com sucesso',
        backgroundColor: 'green.500',
      });
      setReload(!recharge);
    } else {
      toast.show({
        title: 'Erro ao cancelar consulta',
        backgroundColor: 'red.500',
      });
    }
  }

  return (
    <ScrollView p="5">
      <Title color="blue.500">Minhas consultas</Title>
      <Bud mt={5} mb={5}>Agendar nova consulta</Bud>

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Title>
      {upcomingConsultations?.map((query) => (
        <CardConsultation
          nome={query?.especialista?.nome}
          especialidade={query?.especialista?.especialidade}
          foto={query?.especialista?.imagem}
          data={convertDataToString(query?.data)}
          wasScheduled
          key={query.id}
          onPress={() => cancel(query.id)}
        />
      ))}

      <Divider mt={5} />

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Title>
      {pastQueries?.map((query) => (
        <CardConsultation
          nome={query?.especialista?.nome}
          especialidade={query?.especialista?.especialidade}
          foto={query?.especialista?.imagem}
          data={convertDataToString(query?.data)}
          wasAnswered
          key={query.id}
          onPress={() => navigation.navigate('Agendamento', {
            expertId: query.especialista.id
          })}
        />
      ))}
    </ScrollView>
  )
}