import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Price({children, numberOfLine=2, size = 18}) {
    return (
        <View>
            <Text
             numberOfLines={numberOfLine} 
             style={{fontWeight: 'bold',  fontSize: size, alignSelf: 'center', bottom: 90}}>
                {children}
            </Text>
        </View>
    
    )
}