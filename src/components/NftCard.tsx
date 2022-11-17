import { Heading, HStack, Image, Text, VStack, Icon } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {

};

export function NftCard({ ...rest }: Props) {
 return(
  <TouchableOpacity {...rest}>
    <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
     <Image 
      source={{ uri: 'https://storage.googleapis.com/bro-dr-io.appspot.com/RAP-Rap/Mateca/nfts-C001Q22022/GENIE049.png'}}
      alt="Imagem de Nft"
      w={16}
      h={16}
      rounded="md"
      mr={4}
      resizeMode="center"
     />

     <VStack flex={1}>
      <Heading fontSize="lg" color="white">
       Nft Mateca Gold
      </Heading>

      <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
       Price: 2.000 pionts
      </Text>
     </VStack>

     <Icon 
      as={AntDesign}
      name="right"
      color="gray.300"
     />
    </HStack>
  </TouchableOpacity>
 );
}