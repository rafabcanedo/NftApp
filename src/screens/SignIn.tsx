import { VStack, Image, Center, Heading } from 'native-base';

import BackgroundImg from '../assets/background.png';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function SignIn() {
 return(
  <VStack flex={1} bg="gray.600" px={10}>

    <Center my={24}>
     <Heading color="gray.100">
        Logo
     </Heading>
    </Center>
    <Center>
    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
    Acesse sua conta
    </Heading>

    <Input 
     placeholder="Email"
     keyboardType="email-address"
     autoCapitalize="none"
    />

    <Input 
     placeholder="senha"
     secureTextEntry
    />

    <Button title="Login" />
    </Center>

    <Button title="Login" variant="outline" />

  </VStack>
 );
}