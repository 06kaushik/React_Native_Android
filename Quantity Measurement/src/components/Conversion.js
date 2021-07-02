import React, {useState} from 'react';

//import all the components we are going to use
import { StyleSheet, View, Text, SafeAreaView, TextInput,ScrollView} from 'react-native';
import { Picker } from '@react-native-community/picker';


const Conversion = () => {
  const [value, setValue] = useState('');
  const [number, setNumber] = useState('');
  
  return (
    <ScrollView  horizontal={true} style={styles.container}>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

      
        <Text>From</Text>
        {/* <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}>  
                    <Picker.Item label="Meter" value="mtr" />  
                    <Picker.Item label="Kilometer" value="km" />  
                    <Picker.Item label="Centimeter" value="cm" />  
                </Picker>   */}
        <TextInput
          value={value}
          onChangeText={(value) => setValue(value)}
          placeholder={'Type Value'}
          style={styles.input} />
          
        <Text>To</Text>
        <TextInput
          number={number}
          onChangeText={(number) => setNumber(number)}
          placeholder={'Type Value'}
          style={styles.input}/>
        
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: '#ffffff',
    
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: 'black'
    
  },
});

export default Conversion;