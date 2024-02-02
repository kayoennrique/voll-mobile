import { Text, Avatar, VStack } from 'native-base'
import { Bud } from './Button'

interface CardProps {
  nome: string;
  foto: string;
  especialidade: string;
  data?: string;
  wasAnswered?: boolean;
  wasScheduled?: boolean;
  onPress?: () => void;
}

export function CardConsultation({
  nome,
  foto,
  data,
  especialidade,
  wasScheduled,
  wasAnswered,
  onPress
}: CardProps) {
  return (
    <VStack w="100%" bg={wasAnswered ? 'blue.100' : 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
      <VStack flexDir="row">
        <Avatar size="lg" source={{ uri: foto }} />
        <VStack pl="4">
          <Text fontSize="md" bold>{nome}</Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>
      <Bud mt={4} onPress={onPress}>
        {wasScheduled ? 'Cancelar' : 'Agendar consulta'}
      </Bud>
    </VStack>
  )
}