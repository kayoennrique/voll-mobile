import { VStack, Image, Box } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png';
import { Bud } from './components/Button';
import { InputText } from './components/InputText';
import { Title } from './components/Title';

export default function Login() {
  const [numSection, setNumSection] = useState(0);
  const sections = [
    {
      id: 1,
      title: 'Insira alguns dados básicos',
      inputText: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email'
        },
      ]
    },
    {
      id: 2,
      title: 'Agora, mais alguns dados sobre você:',
      inputText: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ]
    }
  ]

  function nextSection() {
    if (numSection < sections.length - 1) {
      setNumSection(numSection + 1)
    }
  }

  function backSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1)
    }
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Title>
        {sections[numSection].title}
      </Title>
      <Box>
        {
          sections[numSection].inputText.map(input => {
            return <InputText label={input.label} placeholder={input.placeholder} key={input.id} />
          })
        }
      </Box>
      {numSection > 0 && <Bud onPress={() => backSection()} bgColor="gray.400">Voltar</Bud>}
      <Bud onPress={() => nextSection()} mt={4}>Avançar</Bud>
    </VStack>
  );
}