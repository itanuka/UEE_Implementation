import React from 'react'
import { Button, StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import Navigation from '../components/Navigation'
import TextArea from '../components/TextArea'

function AddBlogPost({ navigation }) {
    return (
        <View>
            <Navigation navName="Add Blog Post" />
            <TextArea textStyle={style.title} textContent="Add Title" />
            <TextArea textStyle={style.content} textContent="Add Blog Content" />
            <Button title='SUBMIT' onPress={() => navigation.navigate("EditArticle")} />
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

export default AddBlogPost