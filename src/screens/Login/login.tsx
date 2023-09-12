import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Login() {
    const { navigate } = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Forgot your password?</Text>
            <Button title='Forgot Password' onPress={() => {navigate('ForgotPassword')}} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 14,
    }
  });