import React, { useState } from 'react';
import SectionTempalate from './templates/SectionTemplate';
import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { Box, HStack, VStack } from '@chakra-ui/react';

const SkillsSection = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddItem = (): void => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText.trim()]);
      setInputText('');
    }
  };

  const handleDeleteItem = (index: number): void => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };
  return (
    <SectionTempalate>
      <MyText as="title" title="Skills" />
      <VStack alignItems={'flex-start'} w={'full'}>
        <Box w={'full'}>
          <HStack
            w={'full'}
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'10px'}
          >
            <MyInput
              type="text"
              placeholder="Type something..."
              value={inputText}
              onChange={handleInputChange}
              leftElement={<MyIcon name="college" />}
              name='skills'
            />
            <Box w={{ base: '100%', md: '20%' }}>
              <MyButton title="Add item" onClick={handleAddItem} />
            </Box>
          </HStack>
          <HStack mt={'20px'} flexWrap={'wrap'} spacing={0} gap={'10px'}>
            {items.map((item, index) => (
              <Box
                key={index}
                display={'flex'}
                alignItems={'center'}
                px={'8px'}
                borderRadius={'5px'}
                borderWidth={'1.5px'}
                borderColor={'brand.primary'}
                gap={'5px'}
              >
                <MyText as="span" title={item} color="brand.primary" />
                <Box onClick={() => handleDeleteItem(index)}>
                  <MyIcon
                    name="cross"
                    width="16px"
                    cursor={'pointer'}
                    color="red.500"
                  />
                </Box>
              </Box>
            ))}
          </HStack>
        </Box>
      </VStack>
    </SectionTempalate>
  );
};

export default SkillsSection;
