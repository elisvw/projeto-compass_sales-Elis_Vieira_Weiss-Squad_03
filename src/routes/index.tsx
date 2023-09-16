import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignUp from "../screens/SignUp/signup";
import Login from "../screens/Login/login";
import ForgotPassword from "../screens/forgotpassword/forgotpassword";
import Home from "../screens/home/home";



const Stack = createNativeStackNavigator();

declare global {
        namespace ReactNavigation {
            interface RootParamList {
                SignUp: undefined;
                Login: undefined;
                ForgotPassword: undefined;
                Home: undefined;
            }
        }
    }

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown: false}}/>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


