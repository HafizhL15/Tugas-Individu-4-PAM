import { View, Text, Button, StyleSheet, color } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Button color='green' fontSize='30' title='Buka Kamera' onPress={()=> navigation.navigate('Kamera') } />
            <Text style={styles.teks}>Copyright By Hafizh Londata </Text>
            <Text style={styles.teks}>NIM 119140049</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFFACD',
        alignItems: 'center',
        justifyContent:'center',
        
    },
    teks: {
        fontSize: 20,
        paddingTop: 30,
        fontWeight: 'bold',
        color: 'blue',
        alignItems: 'center'
    }
})
    