import { useToast, UseToastOptions } from '@chakra-ui/react';

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = (options: UseToastOptions) => {
    toast({
      position: 'top-right',
      duration: 3000,
      isClosable: true,
      ...options,
    });
  };

  return showToast;
};
