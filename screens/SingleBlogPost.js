import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextArea from '../components/TextArea';


function SingleBlogPost() {
  const route = useRoute();
  const font = route.params.font
  const title = route.params.title
  const content = route.params.content

  return (
    <View>
      {/* <TextArea textContent={title} textStyle={font === "Rubik" ? styles.title1 : styles.content} />
      <TextArea textContent={content} textStyle={styles.content} /> */}
      <Text
        style={
          font == "Rubik" ? styles.titleRubik : font == "Mukta" ? styles.titleMukta : font == "Ubuntu" ? styles.titleUbuntu : font == "Poppins" ? styles.titlePoppins : font == "Oswald" ? styles.titleOswald : font == "Raleway" ? styles.titleRaleway : font == "Roboto" ? styles.titleRoboto : styles.title
        }
      >
        {title}
      </Text>
      <Text
        style={
          font == "Rubik" ? styles.contentRubik : font == "Mukta" ? styles.contentMukta : font == "Ubuntu" ? styles.contentUbuntu : font == "Poppins" ? styles.contentPoppins : font == "Oswald" ? styles.contentOswald : font == "Raleway" ? styles.contentRaleway : font == "Roboto" ? styles.contentRoboto : styles.content
        }
      >
        {content}
      </Text>
      <Text style={{ fontFamily: "Poppins-Regular", fontSize: 28 }} > {font} </Text>
    </View>
  )
}

const styles = StyleSheet.create({

  titleMukta: {
    fontFamily: "Mukta",
    fontSize: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "10%"
  },
  titleRubik: {
    fontFamily: "Rubik",
    fontSize: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "10%"
  },
  titleUbuntu: {
    fontFamily: "Ubuntu",
    fontSize: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "10%"
  },
  titlePoppins: {
    fontFamily: "Poppins-Regular",
    fontSize: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "10%"
  },
  titleRaleway: {
    fontFamily: "Raleway-Regular",
    fontSize: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "10%"
  },
  titleRoboto: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "10%"
  },
  titleOswald: {
    fontFamily: "Oswald-Regular",
    fontSize: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "10%"
  },
  title: {
    fontSize: 40,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "10%"
  },

  contentMukta: {
    fontFamily: "Mukta",
    fontSize: 24,
    top: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "25%"
  },
  contentRubik: {
    fontFamily: "Rubik",
    fontSize: 24,
    top: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "25%"
  },
  contentUbuntu: {
    fontFamily: "Ubuntu",
    fontSize: 24,
    top: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "25%"
  },
  contentPoppins: {
    fontFamily: "Poppins-Regular",
    fontSize: 24,
    top: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "25%"
  },
  contentRaleway: {
    fontFamily: "Raleway-Regular",
    fontSize: 24,
    top: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "25%"
  },
  contentRoboto: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 24,
    top: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "25%"
  },
  contentOswald: {
    fontFamily: "Oswald-Regular",
    fontSize: 24,
    top: 10,
    borderRadius: 5,
    backgroundColor: "grey",
    alignSelf: "center",
    width: "90%",
    top: "25%"
  },
  content: {
    backgroundColor: "grey",
    width: "90%",
    fontSize: 24,
    top: 10,
  }
})
export default SingleBlogPost