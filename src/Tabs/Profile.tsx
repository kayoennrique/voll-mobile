import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';
import { Title } from '../components/Title';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPatientData } from '../services/PatientService';

export default function Profile() {
  const [dataPatient, setDataPatient] = useState({});

  useEffect(() => {
    async function dataPatient() {
      const patientId = await AsyncStorage.getItem('patientId');
      if (!patientId) return null;

      const result = await getPatientData(patientId)
      if (result) {
        setDataPatient(result)
        console.log(result);
      }
    }
    dataPatient()
  }, []);

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.500">Meu Perfil</Title>
        <Avatar
          size="xl"
          source={{ uri: "https://github.com/kayoennrique.png" }}
          mt={5}
        />
        <Title color="blue.500">Informações pessoais</Title>
        <Title fontSize="lg" mb={1}>{dataPatient.nome}</Title>
        <Title>30/06/1992</Title>
        <Title>Rio de Janeiro - RJ</Title>
        <Divider mt={5} />
        <Title color="blue.500" mb={1}>Histórico médico</Title>
        <Text>Sinusite</Text>
        <Text>Rinite</Text>
      </VStack>
    </ScrollView>
  );
}
