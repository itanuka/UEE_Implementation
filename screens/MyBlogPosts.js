import React from 'react'
import { Alert, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import ArticleListItem from '../components/ArticleListItem'

const articles = [
    { id: 1, title: "Article 1", pubDate: "02/08/2022", font: "monospace" },
    { id: 2, title: "Article 2", pubDate: "08/08/2022", font: "monospace" },
    { id: 3, title: "Article 3", pubDate: "28/08/2022", font: "monospace" },
    { id: 4, title: "Article 2", pubDate: "08/08/2022", font: "monospace" },
    { id: 5, title: "Article 3", pubDate: "28/08/2022", font: "monospace" },
    { id: 6, title: "Article 2", pubDate: "08/08/2022", font: "monospace" },
    { id: 7, title: "Article 3", pubDate: "28/08/2022", font: "monospace" },
    { id: 8, title: "Article 2", pubDate: "08/08/2022", font: "monospace" },
    { id: 9, title: "Article 3", pubDate: "28/08/2022", font: "monospace" },
]

function MyBlogPosts({ navigation }) {
    return (
        <View>
            <ScrollView style={{bottom: 95}}>
                {
                    articles.map((article) => {
                        return (
                            <TouchableOpacity key={article.id} onPress={() => navigation.navigate("SingleArticle")}>
                                <ArticleListItem title={article.title} pubDate={article.pubDate} navigation={navigation} font={article.font} />
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
                <Icon.Button name='plus' backgroundColor="white" color="black" style={{ left: 4 }} onPress={() => navigation.navigate("ComposeArticle")} />
            </TouchableOpacity>
        </View>
    )
}

export default MyBlogPosts