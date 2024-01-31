import { Image, Box, Checkbox, ScrollView, Text } from 'native-base';
import { useState } from 'react';
import Logo from './assets/Logo.png';
import { Bud } from './components/Button';
import { InputText } from './components/InputText';
import { Title } from './components/Title';
import { sections } from './utils/RegistrationEntryText';

export default function Login() {
  const [numSection, setNumSection] = useState(0);

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
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />

      <Title>
        {sections[numSection].title}
      </Title>
      <Box>
        {
          sections[numSection]?.inputText?.map(input => {
            return <InputText label={input.label} placeholder={input.placeholder} key={input.id} />
          })
        }
      </Box>
      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>
          Selecione o plano:
        </Text>
        {
          sections[numSection].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          })
        }
      </Box>
      {numSection > 0 && <Bud onPress={() => backSection()} bgColor="gray.400">Voltar</Bud>}
      <Bud onPress={() => nextSection()} mt={4} mb={20}>Avançar</Bud>
    </ScrollView>
  );
}