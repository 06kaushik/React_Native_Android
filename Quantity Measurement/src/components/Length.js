import React, { Component } from 'react';  
import { TouchableOpacity } from 'react-native';
import {  ScrollView, View, Image, Text,StyleSheet } from 'react-native';  

export default class Length extends Component {  
    constructor (props){
        super(props);

    }

   
handleLength=()=> {
    console.warn(this.props)
    this.props.navigation.navigate('Temp')
}
    render() {
        return(
           
            <ScrollView  horizontal={true} style={styles.container}>
           
            {/* <View style = {styles.container}> */}

           <TouchableOpacity>
            <View style = {styles.box}>
                <View style={styles.inner}>
                    <Image source = {require('../assets/images/Length.png')}
                    onPress={() => this.props.navigation.navigate('Length')} ></Image>
                    <Text>Length</Text>
                </View>
            </View>
            </TouchableOpacity>
            
            
            <TouchableOpacity onPress= {this.handleLength}>
             <View style = {styles.box}>
                 <View style={styles.inner}>
                     <Image source = {require('../assets/images/t1.png')}
                    //   onPress={() => this.props.navigation.navigate('Temp')}
                     ></Image>
                     
                     <Text>Temperature</Text>
                </View>
             </View>
            </TouchableOpacity>

             <TouchableOpacity onPress= {this.handleLength}>
             <View style = {styles.box}>
                 <View style={styles.inner}>
                   <Image source = {require('../assets/images/v1.png')}
                   onPress={() => this.props.navigation.navigate('Volume')}></Image>
                   <Text>Volume</Text>
               </View>
             </View>
             </TouchableOpacity>

         
         </ScrollView>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        
    },
    box: {
        width: 150,
        height: 150,
        padding: 5,
        backgroundColor: "black",
        
    },
    inner: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
        
    
});
  
    