import {
  Center,
  HStack,
  PinInput,
  PinInputField,
  VStack,
} from '@chakra-ui/react';
import { MyButton } from '../button';
import { MyIcon } from '../icon';
import { MyText } from '../text';

interface IOtpVerifyBox {
  value?: string;
  onClose?: () => void;
  align?: string;
  [key: string]: any;
}

const OtpVerifyBox = ({
  value,
  onClose,
  align = 'flex-start',
  ...rest
}: IOtpVerifyBox) => {
  return (
    <Center
      w={'full'}
      h={'full'}
      borderRadius={'8px'}
      flexDirection={'column'}
      gap={'20px'}
      alignItems={align}
      {...rest}
    >
      <MyIcon name={'sheild'} color="brand.primary" width="42" height="42" />
      <VStack spacing={0} w={'full'} alignItems={align}>
        <MyText title="Enter verification code here" as={'heading'} />
        <MyText title={`We have sent you code to ${value}`} as={'p'} />
      </VStack>
      <HStack>
        <PinInput otp>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <HStack>
        <MyText title="Not get the code?" as={'p'} />
        <MyText title="Click here to resend" as={'link'} />
      </HStack>
      <HStack>
        <MyButton
          title="Cancel"
          variant="outline"
          px={'28px'}
          py={'18px'}
          onClick={onClose}
        />
        <MyButton title="Verify" px={'28px'} py={'18px'} />
      </HStack>
    </Center>
  );
};

export default OtpVerifyBox;
