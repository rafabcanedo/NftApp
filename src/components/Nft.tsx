import { Heading, HStack, Image, Text, VStack, Icon } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps} from 'react-native';
import { IProducts } from '../@types/all';
import { AntDesign } from '@expo/vector-icons';


//store.dispatch(productsFetch());

export function Nft(props: { products: IProducts}) {
 const { products } = props;

 return(
  <>
  <TouchableOpacity>
    <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
      <Image
      source={{ uri: products.image}}
      alt="Imagem de Nft"
      w={16}
      h={16}
      rounded="md"
      mr={4}
      resizeMode="center"
     />

     <VStack flex={1}>
      <Heading fontSize="lg" color="white">
       {products.name}
      </Heading>

      <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
       {products.desc}
      </Text>
      <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
       {products.price}
      </Text>
     </VStack>

     <Icon 
      as={AntDesign}
      name="right"
      color="gray.300"
     />
    </HStack>
  </TouchableOpacity>
  </>
 );
}