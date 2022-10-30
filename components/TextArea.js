import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

function TextArea({textStyle, textContent}) {
  return (
    <View style={style.canvas}>
        <TextInput style={textStyle} placeholder={textContent}/>
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