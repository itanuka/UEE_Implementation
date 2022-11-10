import { Image, ImageBackground, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View, Picker } from 'react-native'
import React, { useState, Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Card, List, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { db } from "../../Firebase/Firebase-config";
import {
    collection,
    getDocs,
    updateDoc,
    getDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";


export default function UpdateQuestionScreen({ route }) {

    const userEmail = route.params.userEmail;

    const { data } = route.params;
    const navigation = useNavigation();
    const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0);

    const questionsCollection = collection(db, 'questions')

    const [title, setTitle] = useState(data.title);
    const [category, setCategory] = useState(data.category);
    const [description, setDescription] = useState(data.description);
    const [showModel, setShowModel] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalSubtitle, setModalSubtitle] = useState("");

    const handleSubmit = async () => {
        try {

            const docRef = await doc(db, 'questions', data.id)
            let lastModified = new Date().toLocaleString()

            const response = await updateDoc(docRef, { title, category, description, userEmail, lastModified });
            setModalTitle("Updated...!");
            setModalSubtitle("Your Question is updated succesfully");
            setShowModel(true);
            setTimeout(() => {
                setShowModel(false)
                navigation.popToTop()
            }, 3000)

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
        }

    };


    const rnderModal = () => {
        return (
            <Modal
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    zIndex: 10,
                    flex: 1,
                }}
                animationType="fade"
                transparent={true}
                visible={showModel}
                onRequestClose={() => {
                    setShowModel(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/* <View style={{ alignItems: 'flex-end', paddingEnd: 20, paddingTop: 20 }}>
                            <TouchableOpacity onPress={onClose}>
                                <Image source={require('../../images/FABclose.png')} style={{ height: 20, width: 20 }} />

                            </TouchableOpacity>
                        </View> */}
                        <View style={{ alignItems: 'center', paddingTop: 30 }}>
                            <Image source={require('../../assets/Images/success.png')} style={{ height: 60, width: 60 }} />
                        </View>
                        <View>
                            <List.Item
                                style={{ marginTop: 10, marginBottom: 20 }}
                                title={modalTitle}
                                titleNumberOfLines={1}
                                titleStyle={[{ fontSize: 20, fontWeight: '800', textAlign: 'center', color: 'black' }]}
                                description={modalSubtitle}
                                descriptionNumberOfLines={2}
                                descriptionStyle={[{ fontSize: 16, textAlign: 'center', color: 'black', marginTop: 10 }]}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "#FBFCFC", paddingTop: StatusBar.currentHeight }}>
            {rnderModal()}
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: '13%', height: 70, alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                    <Ionicons color={"rgba(114, 120, 245, 1)"} size={26} name={"chevron-back"} />
                </TouchableOpacity>
                <View style={{ width: '60%', height: 70, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={{ color: 'rgba(114, 120, 245, 1)', fontWeight: 'bold', fontSize: 20, paddingStart: 5 }}>{'Ask New Question'}</Text>
                </View>
            </View>
            <ImageBackground style={{ width: '100%', height: '90%' }}
                source={require('../../assets/Images/background.png')}
            >
                <KeyboardAwareScrollView style={{ paddingStart: 14, paddingEnd: 14, marginBottom: 20 }}>

                    <View style={{ padding: 13, }}>
                        <TextInput
                            label="Title"
                            value={title}
                            onChangeText={text => setTitle(text)}
                        />
                    </View>
                    <View style={{ padding: 13, }}>
                        <Picker
                            selectedValue={category}
                            style={{ height: 50, width: 300, padding: 5 }}
                            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                        >
                            <Picker.Item label="-- Select Category" value="-- Select Category" />
                            <Picker.Item label="Tax" value="Tax" />
                            <Picker.Item label="Intellectual Property" value="Intellectual Property" />
                            <Picker.Item label="Criminal" value="Criminal" />
                            <Picker.Item label="Employment" value="Employment" />
                            <Picker.Item label="Family" value="Family" />
                            <Picker.Item label="Others" value="Others" />
                        </Picker>
                    </View>
                    <View style={{ padding: 13, }}>
                        <TextInput
                            label="Description"
                            value={description}
                            onChangeText={text => setDescription(text)}
                            multiline={true}
                            numberOfLines={10}
                        />
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', paddingTop: 20, marginBottom: 10, padding: 13 }}>
                        <Button
                            mode="contained"
                            dark={false}
                            style={{ width: 150 }}
                            color={'rgba(114, 120, 245, 0.64)'}
                            onPress={handleSubmit}
                        >
                            <Icon name='save' size={25} color="green" />
                        </Button>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </View>
    )



}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: "#DAE3EC",
        borderWidth: 1.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})