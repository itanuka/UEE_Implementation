import React from 'react'
import { Text, View } from 'react-native'

function SingleBlogPost({font, title, content}) {
  return (
    <View>
        <Text> {title} </Text>
        <Text style={{fontStyle: font}} > {content} </Text>
    </View>
  )
}

export default SingleBlogPost