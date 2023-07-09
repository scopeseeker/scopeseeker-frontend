import { MyButton, MyIcon, MyText } from '@/component';
import {
  Center,
  HStack,
  PinInput,
  PinInputField,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface IOtpVerifyBox {
  value?: string;
  setCloseOtpBox: Dispatch<SetStateAction<boolean>>;
  align?: string;
  onClose: () => void;
  [key: string]: any;
}

const OtpVerifyBox = ({
  value,
  setCloseOtpBox,
  onClose,
  align = 'flex-start',
  ...rest
}: IOtpVerifyBox) => {
  const handleClickOnBtn = () => {
    setCloseOtpBox(false);
    onClose();
  };
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
          title="Back"
          variant="outline"
          px={'28px'}
          py={'18px'}
          onClick={handleClickOnBtn}
        />
        <MyButton title="Verify" px={'28px'} py={'18px'} />
      </HStack>
    </Center>
  );
};

export default OtpVerifyBox;
