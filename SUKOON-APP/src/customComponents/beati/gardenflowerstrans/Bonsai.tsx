import React from "react";
import bonsaiImg from "./bonsai.png";
import bonsaiSLImg from "./sillohuetes/bonsaiSL.png";

interface BonsaiProps {
  unlocked: boolean;
}

const Bonsai: React.FC<BonsaiProps> = ({ unlocked }) => {
  return (
    <div style={{background: 'transparent'}}>
      <img
        src={unlocked ? bonsaiImg : bonsaiSLImg}
        alt="Bonsai" style={{background: 'transparent', marginTop: '10%'}}
      />
    </div>
  );
};

export default Bonsai;
