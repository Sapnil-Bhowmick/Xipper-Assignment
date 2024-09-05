// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { colors } from './constants/colors';

import TopBarLayout from './navigation/topstack';
import { AuthProvider } from './context/authContext';



export default function App() {
  return (
    <>
      <StatusBar style='light' barStyle="light-content" backgroundColor={colors.primaryColor} />
      <AuthProvider>
        <NavigationContainer>
          <TopBarLayout />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}

