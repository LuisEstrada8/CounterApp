import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
             <View style={styles.cajaVerde}></View>
             <View style={styles.cajaMorada}></View>
             <View style={styles.cajaNaranja}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //width:400,
        //height:400, 
        //justifyContent:'center',
        //alignItems:'center',
        backgroundColor: '#28C4D9',
    },
    cajaMorada:{
        backgroundColor: '#5856d6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top:0,
        right:0,
    },

    cajaNaranja:{
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position:'absolute',
        bottom:0,
        right:0,
    },
    cajaVerde:{
        backgroundColor: 'green',
        //width: 100,
        //height: 100,
        borderWidth: 10,
        borderColor: 'white',
        //position:'absolute',
        //bottom:0,
        //left:0,
        ...StyleSheet.absoluteFillObject,
    },
});