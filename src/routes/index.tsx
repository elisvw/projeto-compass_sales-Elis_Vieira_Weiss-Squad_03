import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";


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
    const [fontLoaded] = useFonts({
        Roboto_500Medium,
    });
    
    if (!fontLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Sign Up' component={SignUp} options={{headerShown: false}}/>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown: false}}/>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


