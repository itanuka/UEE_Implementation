import { Image, ImageBackground, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Card, List, TextInput } from 'react-native-paper';
import database from '@react-native-firebase/database';
import { UserID } from '../../Constant';

export default class AddQuestionScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            category: '',
            description: '',
            showModel: false

        }


    }

    onSubmit = async () => {
        database()
            .ref(`/questions`)
            .set({
                title: this.state.title,
                category: this.state.category,
                description: this.state.description,
                createdBy: UserID
            })
            .then(() => {
                this.setState({
                    showModel: true
                })
                setTimeout(() => {
                    this.setState({
                        showModel: false
                    }, () => {
                        this.props.navigation.goBack()
                    })
                }, 1000)
            })
            .catch(err => console.log(err))
    }

    rnderModal = () => {
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
                visible={this.state.showModel}
                onRequestClose={() => {
                    this.setState({
                        showModel: false
                    })
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
                            <Image source={require('../../assests/Images/succuess.png')} style={{ height: 60, width: 60 }} />
                        </View>
                        <View>
                            <List.Item
                                style={{ marginTop: 10, marginBottom: 20 }}
                                title={"Submitted!"}
                                titleNumberOfLines={1}
                                titleStyle={[{ fontSize: 20, fontWeight: '800', textAlign: 'center', color: 'black' }]}
                                description={"Your Answer Submitted Successfully"}
                                descriptionNumberOfLines={2}
                                descriptionStyle={[{ fontSize: 16, textAlign: 'center', color: 'black', marginTop: 10 }]}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }



    render() {
        return (
            <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "#FBFCFC", paddingTop: StatusBar.currentHeight }}>
                {this.rnderModal()}
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: '13%', height: 70, alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => this.props.navigation.goBack()}>
                        <Ionicons color={"rgba(114, 120, 245, 1)"} size={26} name={"chevron-back"} />
                    </TouchableOpacity>
                    <View style={{ width: '60%', height: 70, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: 'rgba(114, 120, 245, 1)', fontWeight: 'bold', fontSize: 20, paddingStart: 5 }}>{'Submit Answer'}</Text>
                    </View>
                </View>
                <ImageBackground style={{ width: '100%', height: '90%' }} source={require('../../assests/Images/background.png')}>
                    <KeyboardAwareScrollView style={{ paddingStart: 14, paddingEnd: 14, marginBottom: 20 }}>

                        <View style={{ padding: 13, }}>
                            <TextInput
                                label="Title"
                                value={this.state.title}
                                onChangeText={text => this.setState({ title: text })}
                                multiline={true}
                                numberOfLines={10}
                            />
                        </View>
                        <View style={{ padding: 13, }}>
                            <TextInput
                                label="Title"
                                value={this.state.title}
                                onChangeText={text => this.setState({ title: text })}
                                multiline={true}
                                numberOfLines={10}
                            />
                        </View>
                        <View style={{ padding: 13, }}>
                            <TextInput
                                label="Description"
                                value={this.state.description}
                                onChangeText={text => this.setState({ title: text })}
                                multiline={true}
                                numberOfLines={10}
                            />
                        </View>
                        <View style={{ width: '100%', alignItems: 'flex-end', paddingTop: 20, marginBottom: 10, padding: 13 }}>
                            <Button
                                mode="contained"
                                dark={false}
                                color={'rgba(114, 120, 245, 0.64)'}
                                disabled={this.state.answer === null || this.state.answer.length === 0 ? true : false}
                                onPress={() => this.onSubmit()} >
                                Submit
                            </Button>
                        </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View>
        )
    }
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