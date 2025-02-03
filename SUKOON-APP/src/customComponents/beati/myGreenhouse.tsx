import React, { useState } from 'react'
import './beatiMain.css'
import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react'
import { IoArrowBack } from "react-icons/io5";
import './myGreenhouse.css'
import { IoMdInformation } from "react-icons/io";
import Shelf from './gardenflowerstrans/Shelf.tsx'
import { useNavigate } from 'react-router-dom';
import GardeninfoCard from './GardeninfoCard.tsx';

const unlockedPlants = {
    Bonsai: true,
    Daisy: true,
    Piranha: true,
    Roses: true,
    Sunflower: true,
    Cactus: false,
  };


const MyGreenhouse: React.FC = () => {

    const navigate = useNavigate();
    const currEnergy = 50;

    const goToBeati = () => {
        navigate('/beati')
    }

    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const toggleInfoCard = () => {
        setIsInfoVisible(!isInfoVisible); // Toggle the info card visibility
    };

  return (
    <div className='gardenCont'>

        {isInfoVisible && <GardeninfoCard closeInfoCard={toggleInfoCard}/>}
        <Button className='beatiBackButton' onClick={goToBeati}>
            <IoArrowBack style={{background: 'transparent'}} color='white' size={'80%'}/>

        </Button>

        <Button className='gardenInfo' onClick={toggleInfoCard}>
            <IoMdInformation style={{background: 'transparent'}} size={'10%'} color='#3627ba'/>
        </Button>
        

        <Stack className='myGContainer'>
            
            
            <Box bg={'transparent'} display={'flex'} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
                <HStack bg={'transparent'} display={'flex'} justifyContent={'center'}>
                    <Heading className='greenhouseHead'>
                        MY GREENHOUSE
                    </Heading>
                </HStack>
            </Box>

            <Stack bg={'transparent'} spaceY={'0%'}>
                <Stack bg={'transparent'} spaceY={'-45%'}>
                    <Shelf firstPlant="Roses" secondPlant="Cactus" unlockedPlants={unlockedPlants} spacing={51}/>
                    <HStack bg={'transparent'} display={'flex'} alignContent={'center'} justifyContent={'center'} alignItems={'center'} spaceX={'10%'}>
                        <Box className='flowerInfo'>

                            <Stack bg={'transparent'} className='flowerInfoStack' spaceY={'-20%'}>
                                <Heading bg={'transparent'} textAlign={'center'} fontSize={'90%'}>
                                    {unlockedPlants.Roses ? "Roses" : "???"}
                                </Heading>

                                <Heading bg={'transparent'} textAlign={'center'} fontSize={'50%'}>
                                    {currEnergy} / 50KW
                                </Heading>

                            </Stack>
                            
                        </Box>

                        <Box className='flowerInfo'>

                            <Stack bg={'transparent'} className='flowerInfoStack' spaceY={'-20%'}>

                                <Heading bg={'transparent'} textAlign={'center'} fontSize={'90%'}>
                                    {unlockedPlants.Cactus ? "Cactus" : "???"}
                                </Heading>

                                <Heading bg={'transparent'} textAlign={'center'} fontSize={'50%'}>
                                    {currEnergy} / 100KW
                                </Heading>

                            </Stack>
                            
                        </Box>
                    </HStack>

                </Stack>  

                <Stack bg={'transparent'} spaceY={'-45%'}>
                    <Shelf firstPlant="Bonsai" secondPlant="Daisy" unlockedPlants={unlockedPlants} spacing={53}/>
                    <HStack bg={'transparent'} display={'flex'} alignContent={'center'} justifyContent={'center'} alignItems={'center'} spaceX={'10%'}>
                        

                            <Box className='flowerInfo'>
                                <Stack bg={'transparent'} className='flowerInfoStack' spaceY={'-20%'}>

                                
                                    <Heading bg={'transparent'} textAlign={'center'} fontSize={'90%'}>
                                        {unlockedPlants.Bonsai ? "Bonsai" : "???"}
                                    </Heading>

                                    <Heading bg={'transparent'} textAlign={'center'} fontSize={'50%'}>
                                        {currEnergy} / 150KW
                                    </Heading>
                                </Stack>
                            </Box>

                            <Box className='flowerInfo'>
                                <Stack bg={'transparent'} className='flowerInfoStack' spaceY={'-20%'}>
                                    <Heading bg={'transparent'} textAlign={'center'} fontSize={'90%'}>
                                        {unlockedPlants.Daisy ? "Daisy" : "???"}
                                    </Heading>

                                    <Heading bg={'transparent'} textAlign={'center'} fontSize={'50%'}>
                                        {currEnergy} / 200KW
                                    </Heading>
                                </Stack>
                                

                            </Box>                    

                    </HStack>
                </Stack>
                <Stack bg={'transparent'} spaceY={'-45%'}>
                    <Shelf firstPlant="Sunflower" secondPlant="Piranha" unlockedPlants={unlockedPlants} spacing={58}/>

                    <HStack bg={'transparent'} display={'flex'} alignContent={'center'} justifyContent={'center'} alignItems={'center'} spaceX={'10%'}>
                        <Box className='flowerInfo'>

                            <Stack bg={'transparent'} className='flowerInfoStack' spaceY={'-20%'}>

                                <Heading bg={'transparent'} textAlign={'center'} fontSize={'90%'}>
                                    {unlockedPlants.Sunflower ? "Sunflower" : "???"}
                                </Heading>


                                <Heading bg={'transparent'} textAlign={'center'} fontSize={'50%'}>
                                    {currEnergy} / 250KW
                                </Heading>

                            </Stack>
                            

                        </Box>

                        <Box className='flowerInfo'>
                            <Stack bg={'transparent'} className='flowerInfoStack' spaceY={'-20%'}>

                                <Heading bg={'transparent'} textAlign={'center'} fontSize={'90%'}>
                                    {unlockedPlants.Piranha ? "VF Trap" : "???"}
                                </Heading>

                                <Heading bg={'transparent'} textAlign={'center'} fontSize={'50%'}>
                                    {currEnergy} / 300KW
                                </Heading>

                            </Stack>
                            

                        </Box>
                    </HStack>

                </Stack>
            </Stack>
            
        </Stack>

      
    </div>
  )
}

export default MyGreenhouse
