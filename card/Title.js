import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Title({children, numberOfLine=1, size = 13}) {
    return (
        <View>
            <Text
             numberOfLines={numberOfLine} 
             style={{fontWeight: 'bold',  fontSize: size, color: 'white', bottom: 10 }}>
                {children}
            </Text>
        </View>
    
    )
}


