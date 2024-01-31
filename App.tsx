import Login from './src/Login';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEMES } from './src/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Login />
    </NativeBaseProvider>
  );
}
