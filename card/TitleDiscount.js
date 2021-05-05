import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Title({children, numberOfLine=2, size = 35}) {
    return (
        <View>
            <Text
             numberOfLines={numberOfLine} 
             style={{fontWeight: 'bold',  fontSize: size, color: 'red', bottom: 10 }}>
                {children}
            </Text>
        </View>
    
    )
}