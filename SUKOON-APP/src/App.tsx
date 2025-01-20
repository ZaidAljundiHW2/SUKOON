// App.tsx
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Register from '@/customComponents/login/register.tsx';
import Auth from '@/customComponents/login/auth.tsx';
import Login from '@/customComponents/login/Login.tsx';
import Homepage from '@/customComponents/homepage/Homepage.tsx'
import PinnedMenu from './customComponents/homepage/pinnedMenu';

const App = () => {
  return (
    <Homepage />
  );
};

export default App;



