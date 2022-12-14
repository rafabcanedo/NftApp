import { VStack, Image, Center, Heading, Text, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '../routes/auth.routes';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function SignIn() {

 const navigation = useNavigation<AuthNavigatorRoutesProps>();

 function handleNewAccount() {
  navigation.navigate('signUp');
 }

 return(
  <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
  <VStack flex={1} px={10} pb={16}>

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
     placeholder="Password"
     secureTextEntry
    />

    <Button title="Login" />
    </Center>

   <Center mt={24}>
   <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
    Don't have an account?
   </Text>

    <Button 
     title="SignUp" 
     variant="outline"
     onPress={handleNewAccount} 
    />
   </Center>

  </VStack>
  </ScrollView>
 );
}