import { Box, Button, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import './totalConfig.css'
import './dailyconfig.css'
import Slidebar from './slidebar'

interface TotalConfigProps {
    closeTotalConfig: () => void;
  }

const totalConfig: React.FC<TotalConfigProps> = ({ closeTotalConfig }) => {
  return (
    <div>
        <Box className='totalConfigCont'>
            <Stack className='totalConfigStack' spaceY={'5%'}>

                <Heading className='totalConfigHeader'>
                    Total Goal Configuration
                </Heading>

                <Stack className='TCChildStack'>
                    <Heading className='TCChildH'>
                        Total Energy Conservation Goal:
                    </Heading>
                        
                    <Slidebar />

                </Stack>

                <Stack className='TCChildStack'>

                    <Heading className='TCChildH'>
                        Total Cost Savings Goal:
                    
                    </Heading>
                    <Slidebar />

                </Stack>

                <Stack className='TCChildStack'>
                    <Heading className='TCChildH'>
                        Total Renewable Energy Consumption Goal:
                            
                    </Heading>
                    <Slidebar />
                </Stack>

                <Button className='dailyconfigButton' onClick={closeTotalConfig}>
                    Done
                </Button>
                
            </Stack>
            
        </Box>
      
    </div>
  )
}

export default totalConfig
