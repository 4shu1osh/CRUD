import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Create from '../screens/create';
import Read from '../screens/read';
import Update from '../screens/update';
import ShowPost from '../screens/read/showPost';
import { View, Text } from 'react-native';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Read" component={Read} />
        <Stack.Screen name="ShowPost" component={ShowPost} />
        <Stack.Screen name="Create" component={Create} />
        {/* <Stack.Screen name="Update" component={Update} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
