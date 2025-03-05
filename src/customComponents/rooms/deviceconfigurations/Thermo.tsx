import React, { useState, useRef } from "react";
import "../DeviceControlPage.css"; // Updated styles
import { Box, Button } from "@chakra-ui/react";
import { BsLightbulbFill } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { BsLightbulbOff } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams

interface ThermoPageProps {
  deviceId: string;
}


const Thermo: React.FC<ThermoPageProps> = ({ deviceId }) => {
  const [luminosity, setLuminosity] = useState(25); // Default luminosity
  const [power, setPower] = useState(true); // Light power toggle state
  const navigate = useNavigate(); // Initialize useNavigate
  const { roomId } = useParams<{ roomId: string }>(); // Extract roomId from the URL
  const togglePower = () => {
    setPower((prev) => !prev);
  };

  

  return (
    <div className="ac-control-container" style={{overflowY: 'auto', height:'auto', paddingBottom:'20%'}}>
      {/* Header */}
      <div className="header" style={{padding: '20px', borderRadius:'20px', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.2)'}}>
        <button className="back-button" onClick={() => navigate(`/devices/${roomId}`)}>←</button>
        <h1>Smart Thermostat</h1>
        <div className="power-toggle">
          <label className="toggle-switch">
            <input type="checkbox" checked={power} onChange={togglePower} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      {/* Luminosity Control */}
      <div className="temperature-control" style={{padding: '20px', borderRadius:'20px', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.2)'}}>
        <div className="temperature-circle">
          
          <div className="temperature-display">
            <p className="temperature-value">{luminosity}°</p>
            <p className="temperature-unit">Temperature</p>
          </div>
          
        </div>
      </div>

      

      {/* Conjoined Buttons */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="20px"
        overflow="hidden"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
        width="100%"
        maxWidth="300px"
        margin="20px auto"
      >
        <Button
          flex="1"
          borderRadius="0"
          borderRight="1px solid #ccc"
          bg={power ? "#6cc358" : "white"}
          color={power ? "white" : "#6cc358"}
          _hover={{ bg: power ? "#6cc358" : "white" }}
          onClick={() => setPower(true)}
        >
          Off
        </Button>
        <Button
          flex="1"
          borderRadius="0"
          bg={!power ? "#6cc358" : "white"}
          color={!power ? "white" : "#6cc358"}
          _hover={{ bg: !power ? "#6cc358" : "white" }}
          onClick={() => setPower(false)}
        >
          On
        </Button>
      </Box>
    </div>
  );
};

export default Thermo;