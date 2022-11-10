import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import Navigation from '../components/Navigation'
import TextArea from '../components/TextArea'

import DropDownPicker from 'react-native-dropdown-picker';

import {
    collection,
    getDocs,
    addDoc,
    setDoc,
    doc,
    getDoc,
} from 'firebase/firestore';
import { db } from '../Firebase/Firebase-config';

function AddBlogPost({ navigation }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [disabled, setDisabled] = useState(true);
    let userEmail = "sandeepa321@gmail.com"

    const [open, setOpen] = useState(false);
    const [font, setFont] = useState([]);
    const [items, setItems] = useState([
        { label: 'Mukta', value: 'Mukta' },
        { label: 'Oswald', value: 'Oswald' },
        { label: 'Poppins', value: 'Poppins' },
        { label: 'Raleway', value: 'Raleway' },
        { label: 'Roboto', value: 'Roboto' },
        { label: 'Rubik', value: 'Rubik' },
        { label: 'Ubuntu', value: 'Ubuntu' },
    ]);

    const blogsCollection = collection(db, 'blogs')
    const handleSubmit = async () => {
        try {
            // console.log("In Handle submit")
            console.log({title, content, font, userEmail})
            const response = await addDoc(blogsCollection, { title, content, font, userEmail });
            console.log("Response: " + response.id);
            alert("Article Published Successfully");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
            console.error(error)
        }

    };



    useEffect(() => {
        if (font !== [] && title !== "" && content !== "") {
            setDisabled(false)
        }
    }, [title, content, font])


    return (
        <View>
            <TextInput style={style.title} placeholder='Add Title' onChangeText={setTitle} />
            <TextInput style={style.content} placeholder='Add Blog Content' onChangeText={setContent} />
            <DropDownPicker
                open={open}
                value={font}
                items={items}
                setOpen={setOpen}
                setValue={setFont}
                setItems={setItems}

                theme="LIGHT"
                multiple={false}
                mode="BADGE"
                badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                style={{ width: "90%", alignSelf: "center" }}
            />
            <TouchableOpacity>

                <Button title='SUBMIT' disabled={disabled}
                    onPress={handleSubmit}
                />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        alignSelf: "center",
        minHeight: 60,
        width: "90%",
        backgroundColor: "white",
        fontSize: 28,
        marginVertical: 10,
        borderRadius: 8
    },
    content: {
        alignSelf: "center",
        height: "60%",
        width: "90%",
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