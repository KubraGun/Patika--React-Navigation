//This is an example of online Emulator by https://aboutreact.com
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Favorites from './src/pages/Favorites';
import Products from './src/pages/Products';
import Profile from './src/pages/Profile';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='ProductsTab' component={Products} />
        <Tab.Screen name='FavoritesTab' component={Favorites} />
        <Tab.Screen name='ProfileTab' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;


