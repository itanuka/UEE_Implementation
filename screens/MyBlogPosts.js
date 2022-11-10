import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { db } from '../Firebase/Firebase-config'
import { collection, getDoc, getDocs } from 'firebase/firestore'

import ArticleListItem from '../components/ArticleListItem'

const articles = [
    { id: 1, title: "Article 1", pubDate: "02/08/2022", font: "Mukta" },
    { id: 2, title: "Article 2", pubDate: "08/08/2022", font: "Oswald" },
    { id: 3, title: "Article 3", pubDate: "28/08/2022", font: "Poppins" },
    { id: 4, title: "Article 4", pubDate: "08/08/2022", font: "Poppins" },
    { id: 5, title: "Article 5", pubDate: "28/08/2022", font: "Raleway" },
    { id: 6, title: "Article 6", pubDate: "08/08/2022", font: "Rubik" },
    { id: 7, title: "Article 7", pubDate: "28/08/2022", font: "Ubuntu" },
    { id: 8, title: "Article 8", pubDate: "08/08/2022", font: "Roboto" },
    { id: 9, title: "Article 9", pubDate: "28/08/2022", font: "Oswald" },
]

// const [articles, setArticles] = useState([]);
// const articlesCollectionRef = collection(db, "blogs");


function MyBlogPosts({ navigation }) {
    // const getArticles = async () => {
    //     const data = await getDocs(articlesCollectionRef).then(res=>console.log(res.docs)).catch(err=>console.error(err));
    //     console.log('fds: '+data)
    //     setArticles(data)
    // }

    // const getArticles = async () => {
    //     const snapshot = await getDocs(articlesCollectionRef);
    //     console.log(snapshot)
    //     let dbArticles = [];
    //     snapshot.docs.forEach((doc) => {
    //         dbArticles.push({ ...doc.data(), id: doc.id })
    //     })
    //     if(dbArticles !== [])
    //         setArticles(dbArticles)

    //     setArticles(articlesR)
    // };

    // useEffect(() => {
    //     getArticles();
    // }, [])

    return (
        <View>
            <ScrollView style={{ bottom: 95 }}>
                {
                    articles.map((article) => {
                        return (
                            <TouchableOpacity key={article.id} onPress={() => navigation.navigate("SingleArticle")}>
                                <ArticleListItem title={article.title} pubDate={article.pubDate} navigation={navigation} font={article.font} id={article.id} />
                            </TouchableOpacity>
                        )
                    })
                }


            </ScrollView>
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    bottom: 65,
                    right: 20,
                    height: 70,
                    backgroundColor: 'white',
                    borderRadius: 100,
                    position: 'absolute',
                }}
                onPress={() => navigation.navigate("ComposeArticle")}
            >
                <Icon.Button name='plus' backgroundColor="white" color="black" style={{ left: 4, borderRadius: 20 }} onPress={() => navigation.navigate("ComposeArticle")} />
            </TouchableOpacity>
        </View>
    )
}

export default MyBlogPosts