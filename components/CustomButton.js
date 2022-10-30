import React from 'react'
import { View, Button } from 'react-native'

function CustomButton({textual, styling}) {
  return (
    <View style={styling}>
      <Button title={textual}/>
    </View>
  )
}

export default CustomButton