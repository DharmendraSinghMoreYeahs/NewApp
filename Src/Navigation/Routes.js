import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import AppStack from './AppStack/AppStack';
//LogBox.ignoreAllLogs();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Routes;
