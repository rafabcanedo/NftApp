import {  FlatList } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useGetAllProductsQuery } from '../redux/productsApi';
import { AppNavigationRoutesProps } from '../routes/app.routes';
import { useNavigation } from '@react-navigation/native';
import { Nft } from './Nft';

export function NftCard() {
  const products = useSelector(useGetAllProductsQuery);

  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleOpenDetailsScreen(){
   navigation.navigate('details');
  }
 

 return(
 <FlatList
   data={products}

 />
 );
}