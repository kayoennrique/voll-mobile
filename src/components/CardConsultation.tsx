import { Text, Avatar, VStack } from 'native-base';
import { Bud } from './Button';

interface CardProps {
  name: string;
  specialty: string;
  date?: string;
  wasAnswered?: boolean;
  wasScheduled?: boolean;
  source: string;
}

export function CardConsultation({
  name,
  specialty,
  date,
  source,
  wasAnswered,
  wasScheduled
}: CardProps) {
  const image = require('./assets/clerian.jpg');
  return (
    <VStack
      w="100%"
      bg={wasAnswered ? 'blue.100' : 'white'}
      p="5"
      borderRadius="lg"
      shadow="2"
      mb={5}
    >
      <VStack flexDir="row">
        <Avatar size="xl" source={image} />
        <VStack pl="4">
          <Text fontSize="md" bold>{name}</Text>
          <Text>{specialty}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>
      <Bud mt={4}>
        {wasScheduled ? 'Cancelar' : 'Agendar consulta'}
      </Bud>
    </VStack>
  )
}