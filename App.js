import React from 'react';  
import { View, Text, Button,Image, Dimensions, ScrollView } from 'react-native';  
import { createStackNavigator } from 'react-navigation-stack';  
import {createAppContainer} from 'react-navigation';  

import HomeScreen from './src/HomeScreen'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,   
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  


export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
} 
