import { useState } from 'react';
import { VStack, HStack, FlatList, Heading, Text } from 'native-base';

import { Group } from '../components/Group';
import { HomeHeader } from '../components/HomeHeader';
import { NftCard } from '../components/NftCard';

export function Home() {
 
 const [groups, setGroups] = useState(['Commom', 'Rare', 'Supers', 'Ultras']);
 const [nameNft, setNameNft] = useState(['Nft Mateca Gold', 'Nft Mateca Dark', 'Nft Mateca Orange']);
 const [groupSelected, setGroupSelected] = useState('common');
 
 return (
  <VStack flex={1}>
   <HomeHeader />

   <FlatList 
    data={groups}
    keyExtractor={item => item}
    renderItem={({ item }) => (
     <Group 
      name={item} 
      isActive={groupSelected === item} 
      onPress={() => setGroupSelected(item)}
     />
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    _contentContainerStyle={{ px: 8 }}
    my={10}
    maxH={10}
   />

   <VStack flex={1} px={8}>
   <HStack justifyContent="space-between" mb={5}>
    <Heading color="gray.200" fontSize="md">
     Nft's
    </Heading>

    <Text color="gray.200" fontSize="sm">
     {nameNft.length}
    </Text>
   </HStack>

    <FlatList 
     data={nameNft}
     keyExtractor={item => item}
     renderItem={({ item }) => (
     <NftCard />
     )}
     showsHorizontalScrollIndicator={false}
     _contentContainerStyle={{ paddingBottom: 20}}
    />

   </VStack>
  </VStack>
 );
}