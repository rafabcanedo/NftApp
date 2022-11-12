import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
 title: string;
}

export function Button({ title, variant, ...rest}: Props){
 return(
 <ButtonNativeBase
  w="full"
  h={50}
  bg={variant === "outline" ? "transparent" : "green.600"}
  borderWidth={variant === "outline" ? 1 : 0}
  borderColor="green.500"
  rounded="md"
  _pressed={{
   bg: variant === "outline" ? "gray.500" : "green.400"
  }}
  {...rest}
 >
  <Text 
   color={variant === "outline" ? "green.400" : "white"} 
   fontFamily="heading"
   fontSize="sm"
  >
    {title}
  </Text>
 </ButtonNativeBase>
 );
}