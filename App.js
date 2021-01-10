import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Resturant, OrderDelivery} from './screens';
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Screen name="Resturant" component={Resturant}/>
        <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;