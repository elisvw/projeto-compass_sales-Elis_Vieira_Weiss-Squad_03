import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

export default function SignUp() {
    const { navigate } = useNavigation();
    const [fontLoaded] = useFonts({
        Roboto_500Medium,
    });
    
    if (!fontLoaded) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Sing Up</Text>
            </View>
            <View style={styles.telaInteira}>
                <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Name"
                style={styles.input}
                />
                <TextInput 
                placeholder="Email"
                style={styles.input}
                />
                <TextInput 
                placeholder="Password"
                style={styles.input}
                />
            </View>
            <TouchableOpacity style={styles.login} onPress={() => {navigate('Login')}}>
                <Text style={styles.text}>Already have an account?
                <Feather name='arrow-right' color='#F31227'/>
                </Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => {navigate('Login')}}>
                    <Text style={styles.textButton}>SINGUP</Text>
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
    login: {
        marginLeft: 170,
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
  