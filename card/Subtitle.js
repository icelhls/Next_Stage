import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Subtitle({children, numberOfLine=2, size = 15}) {
    return (
        <View>
            <Text
             numberOfLines={numberOfLine} 
             style={{fontWeight: 'bold',  fontSize: size}}>
                {children}
            </Text>
        </View>
    )
}

