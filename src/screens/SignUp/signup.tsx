import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { createUserWithEmailAndPassword, updateProfile, updateCurrentUser, getAuth } from "firebase/auth";

export default function SignUp() {
    const { navigate } = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const auth = getAuth();
    
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

    const signUp = async () => {
        setLoading(true);
            if (!emailValid || !passwordValid) {
            setLoading(false);
            return;
          }
        try {
            const response = await createUserWithEmailAndPassword(auth, email,password);
            navigate('Login');
            const user = response.user;
            await updateProfile(user, {
              displayName: name,
            });
        } catch (error: any) {
            alert('Sign Up failed: ' + error.message)
        } finally {
            setLoading(false);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Sing Up</Text>
            </View>
            <View style={styles.telaInteira}>
                <View style={styles.inputContainer}>
                <TextInput value={name} placeholder="Name" style={styles.input} onChangeText={(text) => setName(text)} />
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
                <TouchableOpacity style={styles.login} onPress={() => {navigate('Login')}}>
                        <Text style={styles.text}>Already have an account?
                        <Feather name='arrow-right' color='#F31227'/>
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={signUp}>
                        <Text style={styles.textButton}>SING UP</Text>
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
        marginLeft: 5,
        marginRight: 5
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
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
    login: {
        marginLeft: 160,
        marginBottom: 20,
        flexDirection: 'row'
    },
    buttonContainer: {
        width: '95%',
        marginTop: 12,
        marginLeft: 10,
        padding: 16,
        backgroundColor: '#F31227',
        borderRadius: 50,
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    }
  });

