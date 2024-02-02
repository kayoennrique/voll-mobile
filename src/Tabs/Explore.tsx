import { VStack, Box, ScrollView } from "native-base";
import { Bud } from "../components/Button";
import { CardConsultation } from "../components/CardConsultation";
import { InputText } from "../components/InputText";
import { Title } from "../components/Title";
import { useState } from "react";
import { searchSpecialistByState } from "../services/SpecialistService";

interface Specialist {
  nome: string,
  imagem: string,
  especialidade: string,
  id: string;
}

export default function Explore() {
  const [estado, setState] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [resultSearch, setResultSearch] = useState([])

  async function search() {
    if (!estado || !specialty) return null
    const result = await searchSpecialistByState(estado, specialty)
    if (result) {
      setResultSearch(result)
      console.log(result)
    }
  }

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <InputText
            placeholder="Digite a especialidade"
            value={specialty}
            onChangeText={setSpecialty}
          />
          <InputText
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setState}
          />
          <Bud mt={3} mb={3} onPress={search}>
            Buscar
          </Bud>
        </Box>

        <Title color="blue.500" alignSelf="center">Resultado da Busca</Title>
        {resultSearch?.map((especialista: Specialist, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsultation
              especialidade={especialista.especialidade}
              foto={especialista.imagem}
              nome={especialista.nome}
            // onPress={especialista.id}
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  )
}