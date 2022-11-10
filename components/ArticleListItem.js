import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function ArticleListItem({ navigation, id, font, title, pubDate }) {

    // let route = useRoute();
    // let id = route.params.id
    // let font = route.params.font
    // let title = route.params.title
    
    let content = "Content of article "
    content += id

    return (
        <View style={styles.list}>
            <Text style={styles.text}> {title} </Text>
            <Text style={styles.text}> {pubDate} </Text>
            <Icon.Button name="pen" size={25} color="yellow" style={styles.button} onPress={() => navigation.navigate("EditArticle", {font, title, content})} />
            <Icon.Button name="trash" size={25} color="red" style={styles.button}
             onPress={() => Alert.alert("Confirmation Message", "Are you sure you want to delete this article?", [
                {
                    text: "Yes",
                    onPress: () => console.log("Deleted!")
                },
                {
                    text: "No",
                    onPress: () => console.log("Not Deleted!")
                }
             ])} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#BBF",
        height: 70,
        alignItems: "center",
        width: "90%",
        alignSelf: "center",
        marginVertical: "5%",
        borderRadius: 15,
        // borderColor: "black",
        // borderWidth: "20%"
    },
    text: {
        fontSize: 25,
        fontWeight: "500"
    },
    button: {
        width: 50,
        flexDirection: "column",
        backgroundColor: "#BBF"
    }
})

export default ArticleListItem