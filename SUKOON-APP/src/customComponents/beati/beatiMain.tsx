import { Box, Button, Heading, HStack, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import './beatiMain.css'
import CircularProgress from './circularProgress'
import Roses from './gardenflowers/roses.png'
import NormalProgress from './normalProgress'
import { FaPen } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Dailyconfig from './dailyconfig'
import TotalConfig from './totalConfig'

const BeatiMain = () => {

    const progressTotal = 10;
    const progressDaily = 60;
    const navigate = useNavigate(); // Initialize useNavigate

    const goToGreenhouse = () => {
        navigate('/myGreenhouse')
    }

    const [isDailyVisible, setIsDailyVisible] = useState(false);
    const [isTotalVisible, setIsTotalVisible] = useState(false);
    
    const toggleDailyConfig = () => {
        setIsDailyVisible(!isDailyVisible); // Toggle the info card visibility
    };

    const toggleTotalConfig = () => {
        setIsTotalVisible(!isTotalVisible); // Toggle the info card visibility
    };

  return (
    <div className='beatiCont'>

        {isDailyVisible && <Dailyconfig closeDailyConfig={toggleDailyConfig}/>}
        {isTotalVisible && <TotalConfig closeTotalConfig={toggleTotalConfig}/>}

        <Box className='beatiTop'>
            <Heading bg={'transparent'} margin={'25px 0px 25px 15px'} fontSize={'250%'} className='beatiHead'>
                Be'ati
            </Heading>
        </Box>

        <Stack className='beatiContentCont' spaceY={3}>

            <Box className='dailyGoal' spaceY={3}>
                <Stack bg={'transparent'} className='dailyGoalStack'>
                    <Heading bg={'transparent'} color={'#3627ba'} mt={'10px'}>
                        Daily Goal
                    </Heading>

                    <NormalProgress progress={progressDaily}/>
                    <Heading bg={'transparent'} color={'#3627ba'}>
                        {progressDaily}%
                    </Heading>

                    <Box className='editBox' onClick={toggleDailyConfig}>
                        <FaPen style={{background: 'transparent', margin: '10px 10px 10px 10px'}} color='#3627ba' size={'70%'}/>

                    </Box>
                </Stack>

            </Box>

            <CircularProgress progress={progressTotal} size={250} strokeWidth={15} color="#76c7c0" image={Roses}/>

            <HStack className='buttonCont' spaceX={3}>
                <Button className='myCollection' onClick={goToGreenhouse}>
                    <PiPottedPlantFill style={{background: 'transparent', margin: '10px 10px 10px 10px'}} color='#6cce58' size={'170px'}/>
                </Button>
                <Button className='editGoal'  onClick={toggleTotalConfig}>
                    <FaPen style={{background: 'transparent',  margin: '10px 10px 10px 10px'}} color='#3627ba' size={'170px'}/>

                </Button>
            </HStack>
            
        </Stack>
      
    </div>
  )
}

export default BeatiMain
