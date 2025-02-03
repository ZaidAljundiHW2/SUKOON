import React from 'react'
import DaisyIMG from './daisy.png'
import DaisySLIMG from './sillohuetes/daisySL.png'


interface DaisyProps {
    unlocked: boolean;
  }

const Daisy: React.FC<DaisyProps> = ({ unlocked }) => {
  return (
    <div style={{background: 'transparent'}}>

        <img
            src={unlocked ? DaisyIMG : DaisySLIMG}
            alt="Daisy"
            style={{background: 'transparent'}}
        />

        
      
    </div>
  )
}

export default Daisy
