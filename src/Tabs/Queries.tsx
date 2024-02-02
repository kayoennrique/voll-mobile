import { Divider, ScrollView } from 'native-base'
import { CardConsultation } from '../components/CardConsultation'
import { Title } from '../components/Title'
import { Bud } from '../components/Button'

export default function Queries() {
  return (
    <ScrollView p="5">
      <Title color="blue.500">Minhas consultas</Title>
      <Bud mt={5} mb={5}>Agendar nova consulta</Bud>
      <Title
        color="blue.500"
        fontSize="lg"
        alignSelf="flex-start"
        mb={2}
      >
        Próximas consultas
      </Title>
      <CardConsultation
        name='Dr. Clerian Pereira'
        specialty='Psicanalista'
        date='20/04/2024'
        wasScheduled
      />

      <Divider mt={5} />

      <Title
        color="blue.500"
        fontSize="lg"
        alignSelf="flex-start"
        mb={2}
      >
        Consultas passadas
      </Title>
      <CardConsultation
        name='Dr. Clerian Pereira'
        specialty='Psicanalista'
        date='01/11/2023'
        wasAnswered
      />
      <CardConsultation
        name='Dr. Clerian Pereira'
        specialty='Psicanalista'
        date='07/07/2023'
        wasAnswered
      />
      <CardConsultation
        name='Dr. Clerian Pereira'
        specialty='Psicanalista'
        date='23/08/2023'
        wasAnswered
      />
    </ScrollView>
  )
}
