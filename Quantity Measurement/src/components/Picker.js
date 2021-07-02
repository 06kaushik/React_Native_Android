import React, { Component } from 'react'  
import {StyleSheet,View, Text,} from 'react-native'  
import { Picker } from '@react-native-community/picker';
  
export default class LengthPkr extends Component {  
    constructor (){
        super();
        this.state = {  
            choosenIndex: 0  
        };  

    }
    render() {  
        return (  
            <View style={styles.container}>  
               
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}>  
                    <Picker.Item label="Meter" value="mtr" />  
                    <Picker.Item label="Kilometer" value="km" />  
                    <Picker.Item label="Centimeter" value="cm" />  
                </Picker>  
                <Text style={styles.textStyle}> {"Index ="+this.state.choosenIndex}</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',  
        //  flexDirection: 'row'
     },  
    textStyle:{  
        margin: 140,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },  
    pickerStyle:{  
        height: 45,  
        width: 300,  
        color: 'black',  
        justifyContent: 'center',
        backgroundColor: "white"
        
    }  
})  