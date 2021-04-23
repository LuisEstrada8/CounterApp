import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Caja1}>Caja 1</Text>
            <Text style={styles.Caja2}>Caja 2</Text>
            <Text style={styles.Caja3}>Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{

        flex:1,
        backgroundColor: '#28c4d9',
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

    },
    
    Caja1:{
        
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,

    },
    Caja2:{

        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,

        
    },
    Caja3:{
       
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,

    }
});