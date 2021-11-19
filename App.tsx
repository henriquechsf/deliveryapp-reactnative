import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './App.style';
import {AddressScreen} from './app/screens/address/address.screen';
import {HomeScreen} from './app/screens/home/home.screen';
import {LoginScreen} from './app/screens/login/login.screen';
import {RegisterScreen} from './app/screens/register/register.screen';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AddressScreen />
    </PaperProvider>
  );
};

export default App;
