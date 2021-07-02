import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function Header(){
    
    
    return (
        
        <View style= {{
            height: 45,
            backgroundColor: "blue"
        }}>
            <View style={{
                flexDirection: "row",
                margin: 8,
            }}>
                <Text style= {{
                    fontSize: 21,
                    color: "white",
                    fontWeight: 'bold'
                }}>Welcome To Quantity Measurement
                </Text>
                
             
            </View>
        </View>
        
    );
}

