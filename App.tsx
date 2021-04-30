import React from 'react';
import 'react-native-gesture-handler';
import { UserProvider } from './src/contexts/UserContext';
import Routes from './src/routes';

export default function App() {

  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
