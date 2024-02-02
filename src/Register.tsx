import { Image, Box, Checkbox, ScrollView, Text, useToast } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png';
import { Bud } from './components/Button';
import { InputText } from './components/InputText';
import { Title } from './components/Title';
import { sections } from './utils/RegistrationEntryText';
import { registerPatient } from './services/PatientService';

export default function Register({ navigation }: any) {
  const [numSection, setNumSection] = useState(0);
  const [data, setData] = useState({} as any);
  const [plans, setPlans] = useState([] as number[]);
  const toast = useToast()

  function nextSection() {
    if (numSection < sections.length - 1) {
      setNumSection(numSection + 1)
    }
    else {
      console.log(data);
      console.log(plans);
      register()
    }
  }

  function backSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1)
    }
  }

  function dataAtt(id: string, amount: string) {
    setData({ ...data, [id]: amount });
  }

  async function register() {
    const result = await registerPatient({
      cpf: data.cpf,
      nome: data.nome,
      email: data.email,
      endereco: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        estado: data.estado,
        complemento: data.complemento
      },
      senha: data.senha,
      telefone: data.telefone,
      possuiPlanoSaude: plans.length > 0,
      planosSaude: plans,
      imagem: data.imagem
    });
    if (result) {
      toast.show({
        title: 'Cadastro realizado com sucesso',
        description: 'Você já pode fazer login',
        backgroundColor: 'green.500',
      });
      navigation.raplace('Login')
    }
    else {
      toast.show({
        title: 'Erro ao cadastrar',
        description: 'Verifique os dados e tente novamente',
        backgroundColor: 'red.500',
      });
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />

      <Title>
        {sections[numSection].title}
      </Title>
      <Box>
        {
          sections[numSection]?.inputText?.map(input => {
            return (
              <InputText
                label={input.label}
                placeholder={input.placeholder}
                key={input.id}
                secureTextEntry={input.secureTextEntry}
                value={data[input.name]}
                onChangeText={(text) => dataAtt(input.name, text)}
              />
            )
          })
        }
      </Box>
      <Box>
        {numSection == 2 && <Text
          color="blue.800"
          fontWeight="bold"
          fontSize="md"
          mt="2"
          mb={2}
        >
          Selecione o plano:
        </Text>}
        {
          sections[numSection].checkbox.map(checkbox => {
            return (
              <Checkbox
                key={checkbox.id}
                value={checkbox.value}
                onChange={() => {
                  setPlans((plansPrevious) => {
                    if (plansPrevious.includes(checkbox.id)) {
                      return plansPrevious.filter((id) => id !== checkbox.id)
                    }
                    return [...plansPrevious, checkbox.id]
                  })
                }}
                isChecked={plans.includes(checkbox.id)}
              >
                {checkbox.value}
              </Checkbox>)
          })
        }
      </Box>
      {numSection > 0 && <Bud onPress={() => backSection()} bgColor="gray.400">Voltar</Bud>}
      <Bud onPress={() => nextSection()} mt={4} mb={20}>Avançar</Bud>
    </ScrollView>
  );
}