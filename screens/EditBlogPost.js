import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import Navigation from '../components/Navigation'
import TextArea from '../components/TextArea'

// let font = ""

function EditBlogPost() {
    const route = useRoute()
    let font = route.params.font || ""
    let title = route.params.title || ""
    let content = route.params.content || ""
    
  return (
    <View>
        {/* <Navigation navName="Edit Blog Post"/> */}
        <TextArea textStyle={style.title} textContent={{title}} />
        <TextArea textStyle={style.content} textContent={content}/>
        <CustomButton textual="UPDATE" styling={style.styling}
         onPress={()=>Alert.alert("Confirmation Message", "Are you sure you want to update this article?", [{
            text: "Yes",
            onPress: () => console.log("Updated!" + font)
         },
         {
            text: "No",
            onPress: () => console.log("Not updated!")
         }
         ])}/>
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
        borderRadius: 8,
        // fontFamily: font
    },
    canvas: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    styling: {
        marginVertical: 100,
        borderRadius: 20,
        width: "40%",
        alignSelf: "center",
        backgroundColor: "red",
    }
})

export default EditBlogPost