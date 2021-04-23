import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BoxModelObject</Text>
        </View>

        
    )
}


const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: 'red',
    },
    
    title:{
        paddingHorizontal:100,
        fontSize: 20,
        paddingVertical:20,
        marginHorizontal :20,
        //width: 50,
        borderWidth: 10,
        //backgroundColor: 'red',
    }        
});
