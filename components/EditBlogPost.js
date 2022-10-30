import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomButton from './CustomButton'
import Navigation from './Navigation'
import TextArea from './TextArea'

function EditBlogPost() {
  return (
    <View>
        <Navigation navName="Edit Blog Post"/>
        <TextArea textStyle={style.title} textContent="Article 1"/>
        <TextArea textStyle={style.content} textContent="Content from Article 1 is shown here
        in editorial view."/>
        <CustomButton textual="SUBMIT" styling={style.styling}/>
    </View>
  )
}

const style = StyleSheet.create({
    title: {
        minHeight: 60,
        width: 340,
        backgroundColor: "white",
        fontSize: 28,
        marginVertical: 10,
        borderRadius: 8
    },
    content: {
        height: 300,
        width: 340,
        backgroundColor: "white",
        fontSize: 20,
        marginVertical: 10,
        borderRadius: 8
    },
    canvas: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    styling: {
        marginVertical: 100,
        borderRadius: 20,
    }
})

export default EditBlogPost