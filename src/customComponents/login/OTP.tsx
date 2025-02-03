import { Box, Button, Flex, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react';
import TopBorderImage from '@/images/pngegg (1).png';
import './Register.css';
import { CiLock } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, AuthError, fetchSignInMethodsForEmail } from 'firebase/auth'
import { FormControl } from '@chakra-ui/form-control';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { IoChevronBack } from "react-icons/io5";
import './OTP.css'

const ResetPassword = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value); // Update the email state when the user types
  };
  
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value); // Update the password state when the user types
  };




  const handleReset = async(e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setEmailError('');
    let isValid = true;

    if (!email) {
      setEmailError('Invalid Email or Password.');
      isValid = false;
    }

    try {
      const methods = await fetchSignInMethodsForEmail(getAuth(), email);
      if (!(methods.length > 0)) {
        setEmailError('Invalid Email or Password')
        setPasswordError('Invalid Email or Password')
        isValid = false;
      }
    } 
    catch (error) {
      console.error("Error checking email:", error);
      return false;
    }

    if (!isValid) {
      return;
    }

    try {


      if (isValid) {
        
        navigate('/OTP')
      } 
      
      else {

        navigate('/QRWait');
      }
    } catch (err) {
      const errorMessage = (err as AuthError).message;
      setError(errorMessage);
      setEmailError(errorMessage.includes("email") ? errorMessage : ''); 
      setPasswordError(errorMessage.includes("password") ? errorMessage : '');
    }

  };


  const navigate = useNavigate(); // Initialize navigate function

  // Function to navigate back to Auth page
  const goToAuth = () => {
    navigate('/'); // Navigate to the root Auth page
  };

  const goToNewPass = () => {
    navigate('/NewPass')
  }

  const goToResetPassword = () => {
    navigate('/ResetPassword')
  }

  

  return (
    <div style={{ overflowX: 'hidden' }}>

      <Flex className='registerTop' overflow="hidden" position="relative" width="100%">
        {/* Image */}
        <img
          src={TopBorderImage}
          alt="border image"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            maxHeight: '100vh',
            background: 'transparent',
          }}
        />
      </Flex>

      <Button
        borderRadius={200}
        width="30px"
        height="40px"
        display={'flex'}
        bg={'#43eb7f'}
        position="absolute"
        boxShadow='0 4px 8px rgba(0, 0, 0, 0.2)'
        onClick={goToResetPassword} 
        top={'10%'}
        left={'10%'}
      >
            <Text color={'white'} bg={'transparent'}>&lt;</Text>
      </Button>
          <Stack className='otpContainer' display={'flex'} justify={'center'} alignItems={'center'} alignContent={'center'} height={'auto'} bg={'transparent'}>
            <Heading textAlign={'center'} bg={'transparent'}>
              An Email has been sent to your account with a link to reset your password, please check your email.
            </Heading>

            



          </Stack>
        




      
    </div>
  );
};

export default ResetPassword;


