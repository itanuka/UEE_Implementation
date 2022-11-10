import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { Image, View } from 'react-native';
import AddBlogPost from './screens/AddBlogPost';
import EditBlogPost from './screens/EditBlogPost';
import MyBlogPosts from './screens/MyBlogPosts';
import SingleBlogPost from './screens/SingleBlogPost';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyArticles"
          component={MyBlogPosts}
          options={{
            title: "My Blog Posts", "headerTintColor": "blanchedalmond" ,
            headerBackground: () => <Image
            style={{ height: "100%", width: "100%", marginTop: 20 }}
            source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-Qt9nsfh16KY%2FXBOKjhsFARI%2FAAAAAAAAAh4%2FH_QoZJwS2ycTsZdPPYhDL0tuopsX6QG-QCHMYCw%2Fw1200-h630-p-k-no-nu%2F1024x768-light-pastel-purple-solid-color-background.jpg&f=1&nofb=1&ipt=fb2510a267a29df904ef43c6bfcfc7d71f0880fc5978757997d5055919fed5f7&ipo=images" }} />
          }}
        />
        <Stack.Screen
          name="ComposeArticle"
          component={AddBlogPost}
          options={{
            title: 'Add Blog Post', "navigationBarColor": "powderblue", "headerTintColor": "blanchedalmond",
            headerBackground: () => <Image
              style={{ height: "100%", width: "100%", marginTop: 20 }}
              source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-Qt9nsfh16KY%2FXBOKjhsFARI%2FAAAAAAAAAh4%2FH_QoZJwS2ycTsZdPPYhDL0tuopsX6QG-QCHMYCw%2Fw1200-h630-p-k-no-nu%2F1024x768-light-pastel-purple-solid-color-background.jpg&f=1&nofb=1&ipt=fb2510a267a29df904ef43c6bfcfc7d71f0880fc5978757997d5055919fed5f7&ipo=images" }} />
          }}
        />
        <Stack.Screen
          name="EditArticle"
          component={EditBlogPost}
          options={{
            title: "Edit Blog Article", "headerTintColor": "blanchedalmond" ,
            headerBackground: () => <Image
            style={{ height: "100%", width: "100%", marginTop: 20 }}
            source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-Qt9nsfh16KY%2FXBOKjhsFARI%2FAAAAAAAAAh4%2FH_QoZJwS2ycTsZdPPYhDL0tuopsX6QG-QCHMYCw%2Fw1200-h630-p-k-no-nu%2F1024x768-light-pastel-purple-solid-color-background.jpg&f=1&nofb=1&ipt=fb2510a267a29df904ef43c6bfcfc7d71f0880fc5978757997d5055919fed5f7&ipo=images" }} />
          }}
        />
        <Stack.Screen
          name="SingleArticle"
          component={SingleBlogPost}
          options={{
            title: "Blog Article", "headerTintColor": "blanchedalmond" ,
            headerBackground: () => <Image
            style={{ height: "100%", width: "100%", marginTop: 20 }}
            source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-Qt9nsfh16KY%2FXBOKjhsFARI%2FAAAAAAAAAh4%2FH_QoZJwS2ycTsZdPPYhDL0tuopsX6QG-QCHMYCw%2Fw1200-h630-p-k-no-nu%2F1024x768-light-pastel-purple-solid-color-background.jpg&f=1&nofb=1&ipt=fb2510a267a29df904ef43c6bfcfc7d71f0880fc5978757997d5055919fed5f7&ipo=images" }} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App