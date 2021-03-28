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

/**
 import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Accordian from './src/Accordian'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'Non Veg Biryanis', 
          data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
        },
        { 
          title: 'Pizzas',
          data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
        },
        { 
         title: 'Drinks',
         data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
        },
        { 
          title: 'Deserts',
          data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        },
      ]
     }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderAccordians() }
      </View>
    );
  }

  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
        items.push(
            <Accordian 
                title = {item.title}
                data = {item.data}
            />
        );
    }
    return items;
}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:100,
   backgroundColor: 'white',
   
  }
});
 */


/*
import React from 'react';  
import { View, Text, Button,Image, Dimensions } from 'react-native';  
import { createStackNavigator } from 'react-navigation-stack';  
import {createAppContainer} from 'react-navigation';  

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class HomeScreen extends React.Component {  
     static navigationOptions = {  
   
      headerShown: false
  };  

  constructor(props){
    super(props);
    this.state = {
      active: false
    }
  }

  changeSeeMore() {
    console.log(this.state.active)
    this.setState({active: true})
  }
  
    render() {  
        return (  
           <View style={{margin: 30, }} >
              <View style={{flexDirection: 'row', justifyContent:'space-between', }} >
                  <View style={{ borderColor: 'black', borderRadius: 10, borderWidth: 1, height: 150, width: 150}}>  
                    <Image  
                      source={require('./abstract.png')}
                      style={{height: 140, width: 140}}
                      />
                  </View>
                  <View style={{ backgroundColor: 'red', height: 150, width: 150}}>  
                    <Text style={{fontSize: 18}} >How to clear FRA without coaching - Vision IAS</Text>
                  </View> 
              </View>

              <View style={{height: 1,  backgroundColor: 'black', marginTop: 15, marginBottom: 15}} />
              
              <Text style={{fontSize: 18, marginBottom: 5}} >Introduction</Text>

             <View style={{}}>
                 {this.state.active
                 ?
                 <Text style={{fontSize: 14}} >This is a representative text. The entire sentence won't be visible at once, but will only feature a preview in collapse mode which will be  
                 This is a representative text. The entire sentence won't be visible at once, but will only feature a preview in collapse mode which will be. 
                  </Text>
                 :
                 <Text style={{fontSize: 14}} >This is a representative text. The entire sentence won't be visible at once, but will only feature a preview in collapse mode which will be  
                      <Text style={{color: 'red'}} onPress={() => this.changeSeeMore()} >   see more</Text> 
                  </Text>
                  }
             </View>

           </View> 



        );  
    }  
}  



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

*/