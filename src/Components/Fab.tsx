import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props{
    title: String
    position: 'br'| 'bl';
    onPress: () => void;
}

export const Fab = ({title, onPress , position = 'br'}: Props) => {
    return (
     
   <View
   style={position === 'bl' ? styles.fap_LocationL : styles.fap_LocationR}
   >
<TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
      >
        <View style={styles.fap}>
            <Text style={styles.fapText}>{title}</Text>
        </View>
    </TouchableNativeFeedback>
   </View>
     
    )
}

const styles = StyleSheet.create({
    
    fap_LocationR:{
        bottom: 25,
        position: 'absolute',
        right:25,
    },

    fap_LocationL:{
        bottom: 25,
        position: 'absolute',
        left:25,
    },

    fap:{
        backgroundColor: '#5856d6',
        borderRadius: 100,
        height: 60,
        justifyContent:'center',
        width: 60,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
},
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 11,
    },
    
    fapText:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})
