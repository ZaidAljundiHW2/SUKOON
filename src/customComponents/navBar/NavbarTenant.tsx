import { Box, Button, Heading, HStack, Stack } from "@chakra-ui/react";
import { FiHome, FiBarChart2, FiUser, FiLayout } from "react-icons/fi";
import { GiCircleForest } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

interface Home {
  homeName: string;
  homeType: string;
  hubCode: string;
}

interface NavbarTenantProps {
  homes: Home[];
}

const NavbarTenant: React.FC<NavbarTenantProps> = ({ homes }) => {
  const navigate = useNavigate();
  const [hasHubs, setHasHubs] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHasHubs(homes.length > 0);
    setLoading(false);
  }, [homes]);

  const goToHome = () => {
    if (hasHubs) {
      navigate('/Home');
    } else {
      navigate('/initial');
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
    <Box position="fixed" bottom="-4" width="100%" bg="white" color="white" p="4" className="navContainer" zIndex={1000}>
      <HStack bg={'transparent'} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'} spaceX={'05%'} mb={2}>
        {/* Home Button */}
        <Button className="navButton" onClick={goToHome}>
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <FiHome size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
            <Heading color="#21334a" fontSize={'90%'} bg={'transparent'} textAlign={'center'}>
              Home
            </Heading>
          </Stack>
        </Button>

        {/* Rooms Button */}
        <Button className="navButton" onClick={goToRooms} disabled={!hasHubs || loading} opacity={!hasHubs || loading ? 0.5 : 1}>
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <FiLayout size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
            <Heading color="#21334a" fontSize={'90%'} bg={'transparent'} textAlign={'center'}>
              Rooms
            </Heading>
          </Stack>
        </Button>

        {/* Be'ati Button */}
        <Button className="navButton" onClick={goToBeati} disabled={!hasHubs || loading} opacity={!hasHubs || loading ? 0.5 : 1}>
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <GiCircleForest size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
            <Heading color="#21334a" fontSize={'90%'} bg={'transparent'} textAlign={'center'}>
              Be'ati
            </Heading>
          </Stack>
        </Button>

        {/* Stats Button */}
        <Button className="navButton" onClick={goToStats} disabled={!hasHubs || loading} opacity={!hasHubs || loading ? 0.5 : 1}>
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <FiBarChart2 size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
            <Heading color="#21334a" fontSize={'90%'} bg={'transparent'} textAlign={'center'}>
              Stats
            </Heading>
          </Stack>
        </Button>

        {/* Account Button */}
        <Button className="navButton" onClick={goToAccount}>
          <Stack spaceY={-3} display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <FiUser size={'70%'} style={{ background: 'transparent' }} color="#21334a" />
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