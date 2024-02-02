import { VStack, Box, ScrollView } from "native-base";
import { Bud } from "../components/Button";
import { CardConsultation } from "../components/CardConsultation";
import { InputText } from "../components/InputText";
import { Title } from "../components/Title";

export default function Explorar() {
  const image = require('./assets/clerian.jpg');
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <InputText
            placeholder="Digite a especialidade"
          />
          <InputText
            placeholder="Digite sua localização"
          />
          <Bud mt={3} mb={3}>
            Buscar
          </Bud>
        </Box>

        <Title color="blue.500" alignSelf="center">Resultado da Busca</Title>
        {[1, 2, 3].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsultation
              specialty="Psicanalista"
              source={image}
              name="Dr. Clerian Pereira"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}