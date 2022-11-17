import { Heading, HStack, Icon, Text, VStack, Image, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { AppNavigationRoutesProps } from '../routes/app.routes';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Button } from '../components/Button';

export function Details() {
 const navigation = useNavigation<AppNavigationRoutesProps>();

 function handleGoBack(){
  navigation.goBack();
 }
 return (
  <VStack flex={1}>
   <VStack px={8} bg="gray.500" pt={12}>
    <TouchableOpacity onPress={handleGoBack}>
     <Icon as={Feather} name="arrow-left" color="orange.500" size={6} />
    </TouchableOpacity>

    <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
      <Heading color="gray.100" fontSize="lg">
       Nft Details
      </Heading>

      <HStack>
      <Text color="gray.200" ml={1} textTransform="capitalize">
        Ultra
      </Text>
      </HStack>
    </HStack>
   </VStack>
   
   <VStack>
    <Image 
     w="full"
     h={80}
     source={{ uri: 'https://storage.googleapis.com/bro-dr-io.appspot.com/RAP-Rap/Mateca/nfts-C001Q22022/GENIE049.png'}}
     alt="Nft Name"
     mb={3}
     resizeMode="cover"
     rounded="lg"
    />

    <Box bg="gray.600" rounded="md" pb={4} px={4}>
     <VStack alignItems="center" mb={6} mt={5}>
      <Text color="gray.200">
        Esse Nft versão Ultra, detalhado em ouro.
      </Text>
     </VStack>

     <Button 
      title="Add to Cart"
     />
    </Box>
   </VStack>
  </VStack>
 );
}