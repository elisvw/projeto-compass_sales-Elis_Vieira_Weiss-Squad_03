import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}