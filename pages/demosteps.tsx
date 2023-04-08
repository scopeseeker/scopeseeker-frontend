import { Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';

function GenderSelector() {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelection = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <ButtonGroup variant="outline" spacing="4">
      <Button
        onClick={() => handleGenderSelection('male')}
        bg={selectedGender === 'male' ? 'brand.primary' : 'none'}
        color={selectedGender === 'male' ? 'brand.white' : 'none'}
        _hover={{ bg: selectedGender === 'male' ? 'brand.semiblack' : 'none' }}
      >
        Male
      </Button>
      <Button
        onClick={() => handleGenderSelection('female')}
        bg={selectedGender === 'female' ? 'brand.primary' : 'none'}
        color={selectedGender === 'female' ? 'brand.white' : 'none'}
        _hover={{ bg: selectedGender === 'female' ? 'brand.semiblack' : 'none' }}
      >
        Female
      </Button>
      <Button
        onClick={() => handleGenderSelection('others')}
        bg={selectedGender === 'others' ? 'brand.primary' : 'none'}
        color={selectedGender === 'others' ? 'brand.white' : 'none'}
        _hover={{ bg: selectedGender === 'others' ? 'brand.semiblack' : 'none' }}
      >
        Others
      </Button>
    </ButtonGroup>
  );
}

export default GenderSelector;
