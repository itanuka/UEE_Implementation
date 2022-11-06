import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AddBlogPost from './AddBlogPost'

function HomeScreen() {
  return (
    <View style={style.canvas}>
      <Text style={style.text} > Legal Eagle 🦅 </Text>
      <AddBlogPost />
    </View>
  )
}

const style = StyleSheet.create({
  canvas: {
    backgroundColor: 'royalblue',
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  text: {
    marginTop: 20,
    fontFamily: 'Consolas',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'blanchedalmond',
    justifyContent: "center"
  }
})

export default HomeScreen