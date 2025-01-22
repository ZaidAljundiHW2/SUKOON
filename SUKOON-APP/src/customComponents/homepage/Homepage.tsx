import { Box, Flex, Heading, HStack, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import './Homepage.css'
import { MdArrowDropDown } from "react-icons/md";
import Dropdown from './Dropdown.tsx'
import MiniDisplays from './miniDisplays.tsx';
import { FcTwoSmartphones } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcChargeBattery } from "react-icons/fc";
import Lottie from 'react-lottie-player';
import PulseAnimation from '@/images/animatedIcons/Animation - 1737092091343.json'
import { TbCirclePlusFilled } from "react-icons/tb";
import PinnedMenu from './pinnedMenu.tsx';
import { useEffect } from 'react';
import Mockroom from './Mockroom.tsx';


const Homepage = () => {
  const username = sessionStorage.getItem('username');
  const [isPinnedMenuVisible, setPinnedMenuVisible] = useState(false);

  const [pinnedItems, setPinnedItems] = useState<string[]>([]);
  const [isRemoveRoomVisibile, setRemoveRoomVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  const handlePinItem = (item: string) => {
    setPinnedItems((prev) => [...prev, item]); // Add item to pinned list
  };


  useEffect(() => {
    // Disable scrolling when pinnedMenu is open
    document.body.style.overflow = 'hidden';

    // Clean up and allow scrolling again when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    // Disable scrolling when pinnedMenu is open
    if (isPinnedMenuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isPinnedMenuVisible]);

  return (
    <div style={{overflow: 'hidden'}}>
      <Stack className='homepageContainer' position={'relative'} display={'flex'} overflow={'hidden'}>
        <Box className='homepageHeader'>
          <Heading bg={'transparent'} ml={'20px'} mt={'20px'} fontWeight={'extrabold'} className='introHomepage'>
            Ya Halla, <span className='guestIntro'>{username || 'guest'}</span>
          </Heading>
        </Box>

        {/* Ensure items are centered */}
        <HStack align="center" ml="20px" mt={'10px'} zIndex={1}>
          <Heading color={'#454545'} bg={'transparent'}>
            Homes:
          </Heading>

          <Dropdown initialShow='Choose Home...'></Dropdown>

          
        </HStack>

        <Flex display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'} mt={'25px'} zIndex={1} bg={'transparent'}>
          <HStack spaceX={-5} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <MiniDisplays Icon={FcTwoSmartphones} title="Active devices:" value="8"></MiniDisplays>
            <MiniDisplays Icon={FcPositiveDynamic} title="Home Status:" value="Good"></MiniDisplays>
            <MiniDisplays Icon={FcChargeBattery} title="Energy Generation:" value="50KW/h"></MiniDisplays>
          </HStack>
        </Flex>

        <Flex className='pulseBoxContainer'>
          <Lottie
          loop
          animationData={PulseAnimation}
          play
          className='pulseAnimation'
          >

          </Lottie>
          <Box className='pulseBox'>
            <Heading bg={'transparent'} fontWeight={'bold'} className='totalConsShow'>
              50.1KW/h
            </Heading>

          </Box>
          
        </Flex>
        <Flex zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'} >
          <Heading color={'#05FF02'} textDecor={'underline'}>
            Total Consumption
          </Heading>

        </Flex>

        <HStack ml="20px" zIndex={1} spaceX={'20%'} display={'flex'} mt={'20px'}>
          <Heading fontSize={'220%'} className='pinnedHeader'>
            Pinned
          </Heading>

          <HStack display={'flex'}>
            <Box bg={'#E4E4E7'} width={'70%'} height={'25px'} justifyContent={'center'} alignItems={'center'} alignContent={'center'} display={'flex'} borderRadius={20} onClick={() => setIsEditing(!isEditing)}>
              <Heading className='editHeader' fontSize={'100%'} bg={'transparent'} justifyContent={'center'} alignItems={'center'} alignContent={'center'} mt={'2px'}>
                Edit
              </Heading>
            </Box>

            <TbCirclePlusFilled color='#21334a' size={'20%'} onClick={() => setPinnedMenuVisible(true)} />

          </HStack>

          
        </HStack>

        <Flex justifyContent={'center'} display={'flex'} alignItems={'center'} alignContent={'center'} zIndex={1}>

          <Box bg={'white'} width={'95%'} height={'50vw'} borderColor={'#21334a'} borderRadius={20} borderWidth={2} overflow={'scroll'}>
            <Flex wrap="wrap" spaceX={'10px'} display={'flex'} alignItems={'center'} alignContent={'center'} justifyContent={'center'}>
              {pinnedItems.map((item, index) => (
                // <Box key={index} className="mockRoom">{item}</Box>
                <Box width={'calc(45%)'}>
                    <Mockroom style={{width: 'calc(100%)'}} roomNum={item} isEditing={isEditing} onRemove={() => {
                        setPinnedItems(prev => prev.filter((_, i) => i !== index));
                      }}>
                      
                    </Mockroom>
                    

                </Box>
              ))}
            </Flex>

          </Box>

        </Flex>

        
        
        
      </Stack>

      <PinnedMenu isVisible={isPinnedMenuVisible}
          onClose={() => setPinnedMenuVisible(false)} onPinItem={handlePinItem}/>
    </div>
  )
}

export default Homepage
