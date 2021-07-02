import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
// import Header from '../components/Header'
// import Box from '../components/Box'
// import LengthPkr from '../components/Picker';
import Length from '../components/Length';
import Temp from '../components/Temp';
import Volume from '../components/Volume';


export default function HomeScreen(){
  // console.warn(props)
    return (
        <View>
          {/* <Header /> */}
           {/* <Box /> */}
          {/* <LengthPkr />  */}
           {/* <Length /> */}
           <Temp /> 
                     {/* <Volume /> */}
          {/* <Conversion /> */}
        </View>
    );
}

