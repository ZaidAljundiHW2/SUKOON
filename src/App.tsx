// App.tsx
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import Register from '@/customComponents/login/register.tsx';
import Auth from '@/customComponents/login/auth.tsx';
import Login from '@/customComponents/login/Login.tsx';
import QRWait from '@/customComponents/login/QRWait.tsx';
import ResetPassword from '@/customComponents/login/ResetPassword.tsx';
import OTP from '@/customComponents/login/OTP.tsx';
import NewPass from '@/customComponents/login/NewPass.tsx';
import Statistics from '@/customComponents/stats/stats_mainpage'; // Ensure the correct path to your Statistics component
import Homepage from './customComponents/homepage/Homepage';
import Navbar from './customComponents/navBar/Navbar';
import RoomList from './customComponents/rooms/roomsList';
import Devices from './customComponents/rooms/devices';
import AccountsPage from './customComponents/account/AccountsPage';
import AccInfo from './customComponents/account/AccInfo';
import DeviceControlPage from './customComponents/rooms/DeviceControlPage';
import BeatiMain from './customComponents/beati/beatiMain';
import MyGreenhouse from './customComponents/beati/myGreenhouse';
import Rate from './customComponents/account/Rate'
import MoreTools from './customComponents/account/MoreTools';
import ThirdPartyServices from './customComponents/account/ThirdPartyServices';
import InitialView from './customComponents/homepage/InitialView';

// Layout component that includes the Navbar
const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

const App = () => {
  const location = useLocation();

  // Define the routes that require authentication
  const authenticatedRoutes = ['/Home', '/stats'];

  // Check if the current route is an authenticated route
  const isAuthenticatedRoute = authenticatedRoutes.includes(location.pathname);

  return (
    <>
      {isAuthenticatedRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Auth />} />         {/* Home or Auth page */}
        <Route path="/login" element={<Login />} />   {/* Login page */}
        <Route path="/register" element={<Register />} /> {/* Register page */}
        <Route path="/QRWait" element={<QRWait />} /> {/* QR Wait page */}
        <Route path="/ResetPassword" element={<ResetPassword />} /> {/* Reset Password page */}
        <Route path="/OTP" element={<OTP />} /> {/* OTP page */}
        <Route path="/NewPass" element={<NewPass />} /> {/* New Password page */}

        {/* Actual App */}
        <Route path="/Home" element={
          <AuthenticatedLayout>
            <InitialView />
          </AuthenticatedLayout>
        } /> {/* Homepage */}

        <Route path="/Rooms" element={
          <AuthenticatedLayout>
            <RoomList />
          </AuthenticatedLayout>
        } /> {/* Rooms */}

        <Route path="/devices/:roomId" element={
          <AuthenticatedLayout>
            <Devices />
          </AuthenticatedLayout>
        } /> {/* Room page */}

        <Route path="/devices/:roomId/:deviceId" element={
          <AuthenticatedLayout>
            <DeviceControlPage />
          </AuthenticatedLayout>
        } />

        <Route path="/stats" element={
          <AuthenticatedLayout>
            <Statistics />
          </AuthenticatedLayout>
        } /> {/* Statistics page */}

      <Route path="/accountspage" element={
          <AuthenticatedLayout>
            <AccountsPage />
          </AuthenticatedLayout>
        } /> {/* Account page */}

        <Route path="/accinfo" element={
          <AuthenticatedLayout>
            <AccInfo />
          </AuthenticatedLayout>
        } /> {/* AccountInfo page */}

        <Route path="/beati" element={
          <AuthenticatedLayout>
            <BeatiMain />
          </AuthenticatedLayout>
        } /> {/* beati page */}

<Route path="/myGreenhouse" element={
          <AuthenticatedLayout>
            <MyGreenhouse />
          </AuthenticatedLayout>
        } /> {/* greenhouse page */}

<Route path="/rate" element={
          <AuthenticatedLayout>
            <Rate />
          </AuthenticatedLayout>
        } /> {/* rate page */}
      
      <Route path="/tools" element={
          <AuthenticatedLayout>
            <MoreTools />
          </AuthenticatedLayout>
        } /> {/* tools page */}

<Route path="/services" element={
          <AuthenticatedLayout>
            <ThirdPartyServices />
          </AuthenticatedLayout>
        } /> {/* TPS page */}
      
      </Routes>
      

      
    </>
  );
};

export default App;