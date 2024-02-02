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
      {
        id: 3,
        label: 'Crie uma senha',
        placeholder: 'Insira sua senha',
        secureTextEntry: true,
      },
      {
        id: 4,
        label: 'Confirme sua senha',
        placeholder: 'Insira sua senha',
        secureTextEntry: true,
      }
    ],
    checkbox: []
  },
  {
    id: 2,
    title: 'Agora, mais alguns dados sobre você:',
    inputText: [
      {
        id: 1,
        label: 'CEP',
        placeholder: 'Insira seu CEP'
      },
      {
        id: 2,
        label: 'Endereço',
        placeholder: 'Insira seu endereço'
      },
      {
        id: 3,
        label: 'Número',
        placeholder: 'Insira seu número'
      },
      {
        id: 4,
        label: 'Complemento',
        placeholder: 'Insira seu complemento'
      },
      {
        id: 5,
        label: 'Telefone',
        placeholder: '(00) 00000-0000'
      },
    ],
    checkbox: []
  },
  {
    id: 3,
    title: 'Para finalizar, quais são os seus planos?',
    inputText: [],
    checkbox: [
      {
        id: 1,
        value: 'Sulamerica'
      },
      {
        id: 2,
        value: 'Unimed'
      },
      {
        id: 3,
        value: 'Bradesco'
      },
      {
        id: 4,
        value: 'Amil'
      },
      {
        id: 5,
        value: 'Biosaúde'
      },
      {
        id: 6,
        value: 'Biovida'
      },
      {
        id: 7,
        value: 'Outros'
      },
      {
        id: 8,
        value: 'Não tenho plano'
      }
    ]
  }
]

export { sections }