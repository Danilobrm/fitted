import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from '../screens/Register/Register';
import Login from '../screens/Login/Login';

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<RootStackParamList>();

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Group>
          <AuthStack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <AuthStack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            }}
          />
        </AuthStack.Group>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
