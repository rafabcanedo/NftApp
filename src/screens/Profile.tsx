import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading } from 'native-base';
import * as ImagePicker from 'expo-image-picker';

import { ScreenHeader } from '../components/ScreenHeader';
import { UserPhoto } from '../components/UserPhoto';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

// application All
const PHOTO_SIZE = 33;

export function Profile() {
 const [photoIsLoading, setPhotoIsLoading] = useState(true);
 const [userPhoto, setUserPhoto] = useState('https://github.com/rafabcanedo.png');

 async function handleUserPhotoSelected(){
    setPhotoIsLoading(true);

  try {
  const photoSelected = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
    aspect: [4, 4],
    allowsEditing: true,
   });

   if(photoSelected.canceled) {
    return;
   }
   
   if (photoSelected.uri) {
   setUserPhoto(photoSelected.uri);
  }
  } catch (error) {
   console.log(error);
} finally {
  setPhotoIsLoading(false);
}
 }
 return (
   <VStack flex={1}>
   <ScreenHeader title='Perfil' />

   <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
     <Center mt={6} px={10}>
       {
         photoIsLoading ?
           <Skeleton 
             w={PHOTO_SIZE}
             h={PHOTO_SIZE}
             rounded="full"
             startColor="gray.500"
             endColor="gray.400"
           />
         :
           <UserPhoto 
             source={{ uri: userPhoto }}
             alt="Photo User"
             size={PHOTO_SIZE}
           />
       }
       
       <TouchableOpacity onPress={handleUserPhotoSelected}>
         <Text color="orange.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
           Alter Photo
         </Text>
       </TouchableOpacity>

       <Input 
         bg="gray.600" 
         placeholder='Nome' 
       />

       <Input 
         bg="gray.600" 
         placeholder="E-mail"
         isDisabled
       />
     
       <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12} fontFamily="heading">
         Alter Password
       </Heading>

       <Input 
         bg="gray.600"
         placeholder="Old Password"
         secureTextEntry
       />

       <Input 
         bg="gray.600"
         placeholder="New password"
         secureTextEntry
       />

       <Input 
         bg="gray.600"
         placeholder="Confirm password"
         secureTextEntry
       />

       <Button title="Alter" mt={4} />
     </Center>
   </ScrollView>
 </VStack>
 );
}