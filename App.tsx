import { View, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/SignIn';
import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider>
      <StatusBar 
       barStyle="light-content"
       backgroundColor="transparent"
       translucent
      />
     {fontsLoaded ? <SignIn /> : <View /> }
    </NativeBaseProvider>
  );
}