import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
    const { navigate } = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Text style={styles.text}>Already have an account?</Text>
                <Button title='Login' onPress={() => {navigate('Login')}} />
            </View>
            <View>
                <Button title="SignUp" onPress={() => {navigate('Home')}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 14,
    },
    login: {
        marginLeft: 270,
    }
  });
  