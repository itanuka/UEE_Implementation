import React from 'react'
import { View, Button } from 'react-native'

function CustomButton({textual, styling, onPress}) {
  return (
    <View style={styling}>
      <Button title={textual} onPress={onPress}/>
    </View>
  )
}

export default CustomButton