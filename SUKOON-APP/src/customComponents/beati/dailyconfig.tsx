import React from 'react'
import './dailyconfig.css'
import Slidebar from './slidebar'
import { Box, Button, Heading, Stack } from '@chakra-ui/react'

interface DailyConfigProps {
    closeDailyConfig: () => void;
  }


const dailyconfig: React.FC<DailyConfigProps> = ({ closeDailyConfig }) => {
  return (
    <div>
        <Box className='dailyConfigCont'>
            <Stack bg={'transparent'} className='dailyConfigStack'>

                <Heading className='dailyConfigHead'>
                    Edit daily goal:
                </Heading>

                <Slidebar />

                <Button className='dailyconfigButton' onClick={closeDailyConfig}>
                    Done
                </Button>

            </Stack>
            
        </Box>
      
    </div>
  )
}

export default dailyconfig
