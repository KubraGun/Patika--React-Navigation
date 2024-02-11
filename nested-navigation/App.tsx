import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Member from './src/pages/member/Member';
import MemberDetail from './src/pages/member/MemberDetail';
import MemberUpdate from './src/pages/member/MemberUpdate';


import Profile from './src/pages/Profile/Profile';
import ProfileEdit from './src/pages/Profile/ProfileEdit';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MemberStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='MemberScreen' component={Member} />
      <Stack.Screen name='MemberDetailScreen' component={MemberDetail} />
      <Stack.Screen name='MemberUpdateScreen' component={MemberUpdate} />
    </Stack.Navigator>
  );

}

const ProfileStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='ProfileScreen' component={Profile} />
      <Stack.Screen name='ProfileEditScreen' component={ProfileEdit} />
    </Stack.Navigator>
  );

}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Member' component={MemberStack} />
        <Tab.Screen name='Profile' component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

