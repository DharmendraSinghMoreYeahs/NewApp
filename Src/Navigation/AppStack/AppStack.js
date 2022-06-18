import React, {useState, useEffect} from 'react';
import {
  createNativeStackNavigator,
  TransitionPresets,
  Card,
} from '@react-navigation/native-stack';
import {Detail, Home} from '../..';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      headerMode={false}
      animationEnabled={true}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
