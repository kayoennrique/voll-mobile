import { VStack, Image, Text, Box, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Bud } from './components/Button';
import { InputText } from './components/InputText';
import { Title } from './components/Title';
import { useEffect, useState } from 'react';
import { toDoLogin } from './services/AuthenticationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { NavigationProps } from './@types/navigation';

export default function Login({ navigation }: NavigationProps<'Login'>) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(true)
  const toast = useToast()

  useEffect(() => {
    async function checkLogin() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        navigation.replace('Tabs')
      }
      setLoading(false)
    }
    checkLogin()
  }, [])

  interface TokenProps {
    token: string;
    id: string;
  }

  async function login() {
    const resultado = await toDoLogin(email, senha)
    if (resultado) {
      const { token } = resultado
      AsyncStorage.setItem('token', token)

      const tokenDecodificado = jwtDecode(token) as TokenProps
      const pacienteId = tokenDecodificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)
      navigation.replace('Tabs')
    }
    else {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem",
        backgroundColor: "red.500"
      })
    }
  }

  if (loading) {
    return null
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Title>
        Faça login em sua conta
      </Title>
      <Box>
        <InputText
          label="Email"
          placeholder="Insira seu endereço de e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          label="Senha"
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </Box>
      <Bud onPress={login}>Entrar</Bud>

      <Link href='https://www.github.com/kayoennrique' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}