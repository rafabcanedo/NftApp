import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
 title: string;
}

export function Button({ title, variant, ...rest}: Props){
 return(
 <ButtonNativeBase
  w="full"
  h={50}
  bg={variant === "outline" ? "transparent" : "orange.500"}
  borderWidth={variant === "outline" ? 1 : 0}
  borderColor="orange.500"
  rounded="md"
  _pressed={{
   bg: variant === "outline" ? "gray.500" : "orange.700"
  }}
  {...rest}
 >
  <Text 
   color={variant === "outline" ? "orange.500" : "white"} 
   fontFamily="heading"
   fontSize="sm"
  >
    {title}
  </Text>
 </ButtonNativeBase>
 );
}