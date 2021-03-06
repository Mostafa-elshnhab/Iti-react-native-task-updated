 import React from 'react';
 import {NavigationAction ,NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Login from '../home/index'
 import Home from '../login/index'
 import  List from '../list/List'
import {
    Text,
    View,
  } from 'react-native';
const Stack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer initialRoutName={'Login'} >
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Home} options={{headerTitle:'Sgin Up '}} />
          <Stack.Screen name='Home' component={Login} />
          <Stack.Screen name='List' component={List} />
        </Stack.Navigator>
    
       </NavigationContainer>
    );
}
;
