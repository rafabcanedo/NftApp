import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes/index';
import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <Provider store={store}>
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
       barStyle="light-content"
       backgroundColor="transparent"
       translucent
      />
     {fontsLoaded ? <Routes /> : <Loading /> }
    </NativeBaseProvider>
    </Provider>
  );
}