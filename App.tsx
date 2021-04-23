import React from 'react'
import { SafeAreaView } from 'react-native';
import { FlexScreen } from './src/screens/FlexScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { CounterScreen } from './src/screens/CounterScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreens } from './src/screens/TareaScreens';

export const App = () => {
  return (
      // <HolaMundoScreen/>
      //<CounterScreen/>
      //<BoxObjectModelScreen/>
      //<DimensionesScreen/>
      // <PositionScreen/>
      //<FlexScreen/>
    <SafeAreaView style={{flex:1}}>
      <TareaScreens/>
    </SafeAreaView>
  )
}
