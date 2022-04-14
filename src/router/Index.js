import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Login, Register, Home, Menuauth } from '../page';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Home}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MenuAuth" component={Menuauth} />
    </Stack.Navigator>
  );
};

export default Router;
