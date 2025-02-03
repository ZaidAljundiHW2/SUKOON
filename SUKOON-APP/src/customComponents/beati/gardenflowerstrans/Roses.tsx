import React from 'react'
import RosesIMG from './roses.png'
import RosesSLIMG from './sillohuetes/rosesSL.png'

interface RosesProps {
    unlocked: boolean;
  }

const Roses: React.FC<RosesProps> = ({ unlocked }) => {
  return (
    <div style={{background: 'transparent'}}>
      <img
            src={unlocked ? RosesIMG : RosesSLIMG}
            alt="Roses" style={{background: 'transparent'}}
        />
    </div>
  )
}

export default Roses
