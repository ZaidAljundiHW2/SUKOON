import React, { useState } from 'react';
import './slidebar.css';

const Slidebar: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50); // State to track the slider value

  // Function to handle slider value change
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div>
      <div className="PB-range-slider-div">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          className="PB-range-slider"
          id="myRange"
          onChange={handleSliderChange} // Update value on change
        />
        <p className="PB-range-slidervalue">{sliderValue}KW</p> {/* Display updated value */}
      </div>
    </div>
  );
};

export default Slidebar;
