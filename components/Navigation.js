import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Navigation({ navName }) {

  return (
    <View>
      <TouchableOpacity
        style={style.container}
        onPress={() => Alert.alert('Yes yes. You can click. 😩', "Aflskj", [
          {
            text: 'Cancel',
            style: 'cancel',
            // onPress: console.log('Nay!')
          },
          {
            text: "OK",
            style: "default",
            // onPress: console.log('Yay!')
          },
        ], { cancelable: false }, console.log('Reponse registered!'))}
      >
        <Icon name='chevron-left' size={25} style={style.icon} />
        <Text style={style.text}> {navName} </Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    marginTop: 20
  },
  text: {
    fontSize: 28,
  },
  icon: {
    marginTop: 8,
  }
})

export default Navigation