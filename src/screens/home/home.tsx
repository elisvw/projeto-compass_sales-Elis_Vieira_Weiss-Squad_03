import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';

import { getAuth } from "firebase/auth";

export default function Home() {
    const [name, setName] = useState<string | null>(null);

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
        fontSize: 20,
    }
  });
  