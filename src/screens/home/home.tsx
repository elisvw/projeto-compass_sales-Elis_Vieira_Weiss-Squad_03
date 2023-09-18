import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getAuth } from "firebase/auth";

export default function Home() {
    const [name, setName] = useState<string | null>(null);
    const { navigate } = useNavigation();

    useEffect(() => {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (user) {
        const displayName = user.displayName;
        setName(displayName);
      }
    }, []); 

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, {name}</Text>
            <TouchableOpacity onPress={() => {navigate('Login')}} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGOUT</Text>
            </TouchableOpacity>
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
        fontSize: 20,
    },
    buttonContainer: {
      width: '50%',
      marginTop: 12,
      marginLeft: 8,
      padding: 16,
      backgroundColor: '#F31227',
      borderRadius: 50,
      alignItems: 'center'
    },
    buttonText: {
      color: 'white'
    }
  });
  