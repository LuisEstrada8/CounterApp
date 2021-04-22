import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity , StyleSheet, Systrace} from 'react-native';
import { Fab } from '../Components/Fab';

export const CounterScreen = () => {

    const Valor: number =0;

    const [contador, setContador] = useState(Valor);

    return (
        <View style={style.container}>
            <Text style={style.titulo}>Contador: {contador}
            </Text>

        <Fab
        title='+1'
        position = 'br'
        onPress={ () => setContador(contador + 1)}
        />

        <Fab
        title='-1'
        position = 'bl'
        onPress={ () => setContador(contador - 1)}
        />

    {/* 
      <TouchableOpacity
        onPress={()=> setContador(contador-1)}
        style={style.fap_LocationL}
      >
    <View style={style.fap}>
    <Text style={style.fapText}>-1</Text>
    </View>
      </TouchableOpacity> 
    */}
        </View>
    )
}

const style = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center'
    },

    titulo:{
        textAlign:'center',
        fontSize: 40,
        top: -15,
    },

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
    },
    
    fapText:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})