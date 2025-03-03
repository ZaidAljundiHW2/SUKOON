import { Box, Button, Heading, HStack, Stack } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { GiCircleForest } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { MdAccountCircle } from "react-icons/md";
import { BsDoorClosed } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"; // Import Firestore functions

const NavbarTenant = () => {
  const navigate = useNavigate();
  const [hasHubs, setHasHubs] = useState(false); // State to track if the user has hubs
  const [loading, setLoading] = useState(true); // State to track loading status

  // Function to check if the user has any hubs
  const checkUserHubs = async (userId: string) => {
    const db = getFirestore();
    const userHubsRef = collection(db, "userHubs");
    const q = query(userHubsRef, where("userId", "==", userId));

    try {
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty; // Return true if hubs exist, false otherwise
    } catch (error) {
      console.error("Error checking user hubs:", error);
      return false;
    }
  };

  // Fetch hubs when the component mounts
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userId = user.uid;
        const hasHubs = await checkUserHubs(userId);
        setHasHubs(hasHubs); // Update the state
      } else {
        setHasHubs(false); // No user is signed in
      }
      setLoading(false); // Set loading to false
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  // Navigation functions
  const goToHome = () => {

    if (hasHubs) {
        navigate('/Home');
    }

    else {
        navigate('/initial')
    }
};

  const goToRooms = () => {
    if (hasHubs) {
      navigate('/Rooms');
    }
  };

  const goToBeati = () => {
    if (hasHubs) {
      navigate('/Beati');
    }
  };

  const goToStats = () => {
    if (hasHubs) {
      navigate('/Stats');
    }
  };

  const goToAccount = () => {
    navigate('/accountspage');
  };

  return (
    <Box
      position="fixed"  // Keeps it fixed on the screen
      bottom="-4"        // Moves it to the bottom
      width="100%"
      bg="white"     // Temporary color for visibility
      color="white"
      p="4"
      className="navContainer"
      zIndex={1000}
    >
      <HStack
        bg={'transparent'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        alignContent={'center'}
        spaceX={'05%'}
        mb={2}
      >
        {/* Home Button */}
        <Button className="navButton" onClick={goToHome}>
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <FaHome size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
            <Heading color="#21334a" fontSize={'90%'} bg={'transparent'} textAlign={'center'}>
              Home
            </Heading>
          </Stack>
        </Button>

        {/* Rooms Button */}
        <Button
          className="navButton"
          onClick={goToRooms}
          isDisabled={!hasHubs || loading} // Disable if no hubs or still loading
          opacity={!hasHubs || loading ? 0.5 : 1} // Gray out if no hubs
        >
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <BsDoorClosed size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
            <Heading color="#21334a" fontSize={'90%'} bg={'transparent'} textAlign={'center'}>
              Rooms
            </Heading>
          </Stack>
        </Button>

        {/* Be'ati Button */}
        <Button
          className="navButton"
          onClick={goToBeati}
          isDisabled={!hasHubs || loading} // Disable if no hubs or still loading
          opacity={!hasHubs || loading ? 0.5 : 1} // Gray out if no hubs
        >
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <GiCircleForest size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
            <Heading color="#21334a" fontSize={'90%'} bg={'transparent'} textAlign={'center'}>
              Be'ati
            </Heading>
          </Stack>
        </Button>

        {/* Stats Button */}
        <Button
          className="navButton"
          onClick={goToStats}
          isDisabled={!hasHubs || loading} // Disable if no hubs or still loading
          opacity={!hasHubs || loading ? 0.5 : 1} // Gray out if no hubs
        >
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <SlGraph size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
            <Heading color="#21334a" fontSize={'90%'} bg={'transparent'} textAlign={'center'}>
              Stats
            </Heading>
          </Stack>
        </Button>

        {/* Account Button */}
        <Button className="navButton" onClick={goToAccount}>
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <MdAccountCircle size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
            <Heading color="#21334a" fontSize={'90%'} bg={'transparent'} textAlign={'center'}>
              Account
            </Heading>
          </Stack>
        </Button>
      </HStack>
    </Box>
  );
};

export default NavbarTenant;