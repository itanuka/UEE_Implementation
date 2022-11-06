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
            source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TzTHxzrySdGmBinsRtqZZgHaEK%26pid%3DApi&f=1&ipt=260d1df7bcfa21eb3ac8d62d21e54062d0749fcdddfd9bd2f46f52b3d9be31f1&ipo=images" }} />
          }}
        />
        <Stack.Screen
          name="ComposeArticle"
          component={AddBlogPost}
          options={{
            title: 'Add Blog Post', "navigationBarColor": "powderblue", "headerTintColor": "blanchedalmond",
            headerBackground: () => <Image
              style={{ height: "100%", width: "100%", marginTop: 20 }}
              source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TzTHxzrySdGmBinsRtqZZgHaEK%26pid%3DApi&f=1&ipt=260d1df7bcfa21eb3ac8d62d21e54062d0749fcdddfd9bd2f46f52b3d9be31f1&ipo=images" }} />
          }}
        />
        <Stack.Screen
          name="EditArticle"
          component={EditBlogPost}
          options={{
            title: "Edit Blog Article", "headerTintColor": "blanchedalmond" ,
            headerBackground: () => <Image
            style={{ height: "100%", width: "100%", marginTop: 20 }}
            source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TzTHxzrySdGmBinsRtqZZgHaEK%26pid%3DApi&f=1&ipt=260d1df7bcfa21eb3ac8d62d21e54062d0749fcdddfd9bd2f46f52b3d9be31f1&ipo=images" }} />
          }}
        />
        <Stack.Screen
          name="SingleArticle"
          component={SingleBlogPost}
          options={{
            title: "Blog Article", "headerTintColor": "blanchedalmond" ,
            headerBackground: () => <Image
            style={{ height: "100%", width: "100%", marginTop: 20 }}
            source={{ uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TzTHxzrySdGmBinsRtqZZgHaEK%26pid%3DApi&f=1&ipt=260d1df7bcfa21eb3ac8d62d21e54062d0749fcdddfd9bd2f46f52b3d9be31f1&ipo=images" }} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App