import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Toggle() {
    const [on, setOn] = useState(true)

    const toggleItem =()=>{
        setOn(!on)
    }
    return (
        <View>
            {on && <Text>yes</Text>}
          
            <Button title="toggle" onPress={()=>toggleItem()}>show/hidde</Button>
        </View>
    )
}

const styles = StyleSheet.create({})
