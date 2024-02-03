import { Input, VStack, useToast } from 'native-base'
import { useState } from 'react'
import { Bud } from './components/Button'
import { scheduleConsultation } from './services/ConsultationService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { converterStringParaData } from './utils/conversions'

export default function Agendamento({ route, navigation }: any) {
    const [data, setData] = useState('')
    const toast = useToast()

    async function agendar() {
        const patientId = await AsyncStorage.getItem('patientId')
        const { expertId } = route.params
        if (!patientId || !expertId || !data) return
        const dataFormatada = converterStringParaData(data)
        const result = await scheduleConsultation(dataFormatada, expertId, patientId)
        if (result) {
            toast.show({
                title: 'Consulta agendada com sucesso',
                backgroundColor: 'green.500',
            })
            return navigation.goBack()
        }
        toast.show({
            title: 'Erro ao agendar consulta',
            description: 'Horário indisponível',
            backgroundColor: 'red.500',
        })
    }

    return (
        <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
            <Input
                placeholder="Digite a data"
                onChangeText={setData}
            />

            <Bud onPress={agendar}>
                Agendar
            </Bud>
        </VStack>
    )
}