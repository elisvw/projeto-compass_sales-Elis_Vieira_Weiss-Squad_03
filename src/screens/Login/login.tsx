import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
    const { navigate } = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const auth = FIREBASE_AUTH;

    const [fontLoaded] = useFonts({
        Roboto_500Medium,
    });
    
    if (!fontLoaded) {
        return null;
    }

    const validateEmail = (text: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(text);
        setEmailValid(emailRegex.test(text));
      };
    const validatePassword = (text: string) => {
        const passwordValid = text.length >= 6;
        setPassword(text);
        setPasswordValid(passwordValid);
      };
    
    const login = async () => {
        setLoading(true);
            try {
                const response = await signInWithEmailAndPassword(auth, email,password);
                navigate('Home');
            } catch (error: any) {
                alert('Login failed ' + error.message)
            } finally {
                setLoading(false);
            }
        }
        
    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <Text style={styles.textHeader}>Login</Text>
            </View>
            <View style={styles.telaInteira}>
            <View style={styles.inputContainer}>
            <TextInput 
                value={email} 
                placeholder="Email" 
                style={[styles.input, !emailValid && styles.inputError] }
                onChangeText={(text) => validateEmail(text)} />
                {!emailValid && <Text style={styles.errorMessage}>Not a valid email address. Should be your@email.com</Text>}

                <TextInput 
                secureTextEntry={true}
                value={password} 
                placeholder="Password" 
                style={[styles.input, !passwordValid && styles.inputError]}
                onChangeText={(text) => validatePassword(text)}
                />
                {!passwordValid && <Text style={styles.errorMessage}>Your password must have atleast 6 characters.</Text>}
            </View>
                <TouchableOpacity style={styles.forgot} onPress={() => {navigate('ForgotPassword')}}>
                        <Text style={styles.text}>Forgot your password?
                        <Feather name='arrow-right' color='#F31227'/>
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={login}>
                            <Text style={styles.textButton}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.newAccount}>
                        <TouchableOpacity onPress={() => {navigate('SignUp')}}>
                            <Text style={styles.text}>Create new account <Feather name='external-link' color='#F31227'/></Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F9F9F9',
    },
    header: {
        marginTop: 100,
        marginLeft: 25,
    },
    textHeader: {
        fontSize: 30,
        fontFamily: 'Roboto_500Medium'
    },
      telaInteira: {
          flex: 1,
          marginTop: 70,
          marginLeft: 16,
          marginRight: 16,
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: 64,
        backgroundColor: '#fff',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto_500Medium'
    },
    inputError: {
        borderColor: 'red',
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
    },
    forgot: {
        marginTop: 14,
        marginBottom: 14,
        marginLeft: 180,
        flexDirection: 'row'
    },
    buttonContainer: {
        width: '95%',
        marginTop: 12,
        marginLeft: 8,
        padding: 16,
        backgroundColor: '#F31227',
        borderRadius: 50,
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    },
    newAccount: {
        alignItems: 'center',
        marginTop: 250,
    }
  });



