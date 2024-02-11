import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Favorites from './src/pages/Favorites';
import Products from  './src/pages/Products';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='ProductsTab' component={Products}/>
        <Drawer.Screen name='FavvoritesTab' component={Favorites}/>      
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
