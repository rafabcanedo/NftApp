import { Heading, HStack, Text, VStack, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { SignOut } from 'phosphor-react-native';
import { UserPhoto } from './UserPhoto';

export function HomeHeader() {
 return(
  <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
    <UserPhoto 
     source={{ uri: 'https://github.com/rafabcanedo.png' }}
     alt="Imagem do usuário"
     size={16}
     mr={4}
    />

    <VStack flex={1}>
    <Text color="gray.100" fontSize="md">
     Olá
    </Text>

    <Heading color="gray.100" fontSize="md">
     Canedo
    </Heading>
    </VStack>
    
    <TouchableOpacity>
    <Icon 
     as={SignOut}
     color="gray.200"
     size={7}
    />
    </TouchableOpacity>

  </HStack>
 );
}