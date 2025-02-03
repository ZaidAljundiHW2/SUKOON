import React from 'react'
import CactusImg from './cactus.png'
import CactusSLImg from './sillohuetes/cactusSL.png'

interface CactusProps {
    unlocked: boolean;
  }

const Cactus: React.FC<CactusProps> = ({ unlocked }) => {
  return (
    <div style={{background: 'transparent'}}>
        <img
        src={unlocked ? CactusImg : CactusSLImg}
        alt="Cactus" style={{background: 'transparent'}}
      />
      
    </div>
  )
}

export default Cactus
