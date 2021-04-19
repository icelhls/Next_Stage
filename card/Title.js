import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Title({children, numberOfLine=2, size = 22}) {
    return (
        <View>
            <Text
             numberOfLines={numberOfLine} 
             style={{fontWeight: 'bold',  fontSize: size, color: 'white', bottom: 5 }}>
                {children}
            </Text>
        </View>
    
    )
}


