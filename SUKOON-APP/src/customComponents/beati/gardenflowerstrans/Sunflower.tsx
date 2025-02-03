import React from 'react'
import SunflowerIMG from './sunflower.png'
import SunflowerSLIMG from './sillohuetes/sunflowerSL.png'


interface SunflowerProps {
    unlocked: boolean;
  }


const Sunflower: React.FC<SunflowerProps> = ({ unlocked }) => {
  return (
    <div style={{background: 'transparent', marginRight: '20%'}}>
        <img
            src={unlocked ? SunflowerIMG : SunflowerSLIMG}
            alt="Sunflower" style={{background: 'transparent', marginBottom: '11%'}}
        />
      
    </div>
  )
}

export default Sunflower
