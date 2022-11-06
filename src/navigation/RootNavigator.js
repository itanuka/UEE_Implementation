import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider, TextInput, Searchbar
} from 'react-native-paper';
import merge from 'deepmerge';
import TharushaRootNavigator from '../components/Tharusha/TharushaRootNavigator';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Stack = createNativeStackNavigator()

export default class RootNavigator extends Component {

    
    
    render() {
        return (
            <View style={{ flex: 1, width: "100%", height: "100%" }}>
                <PaperProvider theme={CombinedDefaultTheme}>
                    <NavigationContainer theme={CombinedDefaultTheme}>
                        <Stack.Navigator screenOptions={{ headerShown: false}}>
                            <Stack.Screen name="TharushaRootNavigator" component={TharushaRootNavigator} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PaperProvider>
            </View>
        )
    }
}