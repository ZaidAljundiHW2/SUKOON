import React from 'react'
import PiranhaIMG from './piranha.png'
import PiranhaSLIMG from './sillohuetes/piranhaSL.png'

interface PiranhaProps {
    unlocked: boolean;
  }

const Piranha: React.FC<PiranhaProps> = ({ unlocked }) => {
  return (
    <div style={{background: 'transparent', marginRight: '10%'}}>
      <img
            src={unlocked ? PiranhaIMG : PiranhaSLIMG}
            alt="Piranha" style={{background: 'transparent', marginTop:'11%', width: '200%', height: 'auto'}}
            
        />
    </div>
  )
}

export default Piranha
