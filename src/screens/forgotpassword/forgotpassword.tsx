import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Feather } from '@expo/vector-icons'


export default function ForgotPassword() {
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
                <TouchableOpacity style={styles.arrowHeader} onPress={() => {navigate('Login')}}>
                    <Feather name="chevron-left" size={30}/>
                </TouchableOpacity>
                <Text style={styles.textHeader}>Forgot Password</Text>
            </View>
            <View style={styles.telaInteira}>
                <Text style={styles.text}>Please, enter your email address. 
                ou will receive a link to create a new password via email.</Text>
                <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Email"
                 style={styles.input}
                />
                </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.textButton}>SEND</Text>
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
        marginTop: 50,
        marginLeft: 20,
    },
    arrowHeader: {
        marginBottom: 25,
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
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: 64,
        backgroundColor: '#fff',
        marginLeft: 18,
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto_500Medium',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
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
    }
  });