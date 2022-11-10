import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

function TextArea({textStyle, textContent, setState}) {
  return (
    <View style={style.canvas}>
        <TextInput style={textStyle} placeholder={textContent} onChange={(e)=>setState(e.target.value)} />
    </View>
  )
}

const style = StyleSheet.create({
    canvas: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
})

export default TextArea