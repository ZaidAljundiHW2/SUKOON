import React from 'react'
import Roses from './Roses.tsx'
import Bonsai from './Bonsai.tsx'
import Daisy from './Daisy.tsx'
import Cactus from './Cactus.tsx'
import Sunflower from './Sunflower.tsx'
import Piranha from './Piranha.tsx'
import ShelfIMG from './shelf.png'
import { HStack, Stack } from '@chakra-ui/react'

interface ShelfProps {
    firstPlant: string;
    secondPlant: string;
    unlockedPlants: Record<string, boolean>; // Object to track unlocked status
    spacing: number;
}
const plantComponents: Record<string, React.FC<{ unlocked: boolean }>> = {
    Bonsai,
    Daisy,
    Piranha,
    Roses,
    Sunflower,
    Cactus,
  };

const Shelf: React.FC<ShelfProps> = ({ firstPlant, secondPlant, unlockedPlants, spacing }) => {

    const FirstPlantComponent = plantComponents[firstPlant] || null;
    const SecondPlantComponent = plantComponents[secondPlant] || null;

  return (
    <div style={{background: 'transparent'}}>
        <Stack bg={'transparent'} spaceY={`-${spacing}%`}>
            <HStack bg={'transparent'}>
                {FirstPlantComponent && <FirstPlantComponent unlocked={unlockedPlants[firstPlant]} />}
                {SecondPlantComponent && <SecondPlantComponent unlocked={unlockedPlants[secondPlant]} />}

            </HStack>
            <img src={ShelfIMG} alt='shelf' style={{background:'transparent', zIndex: '-1'}}/>
        </Stack>
      
    </div>
  )
}

export default Shelf
