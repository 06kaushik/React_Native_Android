import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Length from './src/components/Length';
import Temp from './src/components/Temp';
import Volume from './src/components/Volume';
 import HomeScreen from './src/screens/Home';
// import Conversion from './src/components/Conversion';


const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} /> 
          <Stack.Screen name="Length" component={Length} />
          <Stack.Screen name="Temp" component={Temp} />
          <Stack.Screen name="Volume" component={Volume} />
          {/* <Stack.Screen name="Conversion" component={Conversion} /> */}
          
          

          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;