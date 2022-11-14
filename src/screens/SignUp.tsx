import { VStack, Image, Center, Heading, Text, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function SignUp() {

 const navigation = useNavigation();

 function handleGoBack() {
  navigation.goBack();
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
    Create an Account
    </Heading>

    <Input 
     placeholder="Nome"
    />

    <Input 
     placeholder="Email"
     keyboardType="email-address"
     autoCapitalize="none"
    />

    <Input 
     placeholder="Password"
     secureTextEntry
    />

    <Button title="Create" />
    </Center>


    <Button 
     title="Login" 
     variant="outline"
     mt={24}
     onPress={handleGoBack}
    />

  </VStack>
  </ScrollView>
 );
}