import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import './GardeninfoCard.css'
import { IoMdCloseCircleOutline } from "react-icons/io";

interface GardeninfoCardProps {
    closeInfoCard: () => void;
  }


const GardeninfoCard: React.FC<GardeninfoCardProps> = ({ closeInfoCard }) => {

    
  return (
    <div>
        <Box className='infoCardBoxGarden'>

            <Button bg={'transparent'} width={'auto'} height={'auto'} position={'absolute'} top={'5%'} right={'5%'} color={'#3627ba'} onClick={closeInfoCard}>
                <IoMdCloseCircleOutline />
            </Button>

            <Stack bg={'transparent'} display={'flex'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} marginTop={'10px'} mb={'10px'}>
                <Heading className='whatisGH' width={'60%'}>
                    What is "My Greenhouse"?
                </Heading>

                <Text width={'80%'} bg={'transparent'} color={'#3627ba'} textAlign={'center'}>
                    "My Greenhouse" is your own personal collection of plants that you have earned throughout your journey with our gamification module "Be'ati". Grow your gardens by saving more energy, and increase your plant collection to show!
                </Text>
            </Stack>
            
            
        </Box>
      
    </div>
  )
}

export default GardeninfoCard
