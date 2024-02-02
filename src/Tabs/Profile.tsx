import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Title } from '../components/Title'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getPatientData } from '../services/PatientService'
import { Patient } from '../interfaces/Patient'
import { Bud } from '../components/Button'
import { NavigationProps } from '../@types/navigation'

export default function Profile({ navigation }: NavigationProps<'Perfil'>) {
  const [dataPatient, setDataPatient] = useState({} as Patient)

  useEffect(() => {
    async function dataPatient() {
      const patientId = await AsyncStorage.getItem('patientId')
      if (!patientId) return null

      const result = await getPatientData(patientId)
      if (result) {
        setDataPatient(result)
        console.log(result)
      }
    }
    dataPatient()
  }, [])

  function logout() {
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('patientId')
    navigation.replace('Login')
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.500">Meu Perfil</Title>

        <Avatar size="xl" source={{ uri: dataPatient?.imagem }} mt={5} />

        <Title color="blue.500">Informações pessoais</Title>
        <Title fontSize="lg" mb={1}>{dataPatient.nome}</Title>
        <Text>{dataPatient?.email}</Text>
        <Text>{dataPatient?.endereco?.estado}</Text>

        <Divider mt={5} />

        <Title color="blue.500" mb={1}>Planos de saúde</Title>
        {
          dataPatient?.planosSaude?.map((plano, index) => (
            <Text key={index}>{plano}</Text>
          ))
        }

        <Bud onPress={logout}>
          Deslogar
        </Bud>
      </VStack>
    </ScrollView>
  )
}