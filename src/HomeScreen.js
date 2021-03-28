import React from 'react';  
import { View, Text, Button,StatusBar, Image, Dimensions, ScrollView } from 'react-native';  
import { createStackNavigator } from 'react-navigation-stack';  
import {createAppContainer} from 'react-navigation';  
import Accordian from './Accordian'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class HomeScreen extends React.Component {  
     static navigationOptions = {  
   
      headerShown: false
  };  

  constructor(props){
    super(props);
    this.state = {
        active: false,
        menu :[
        { 
           title: 'Fundamental Theorem and Arithmetic', 
            subTitle: '4 tests',
            test1: 'Prime factorization Exercise',
            test2: 'Fill in the blanks',
            test3: 'Match the following',
            image1: require('../assets/LockGreen.png'),
            image2: require('../assets/LockGreen.png'),
            image3: require('../assets/LockRed.png'),
            test3Sub: 'starts 14 March'
        },
        { 
            title: 'HCF and LCM',
            subTitle: '10 tests',
            test1: 'Prime factorization Exercise',
            test2: 'Fill in the blanks',
            test3: 'Match the following',
            image1: require('../assets/LockGreen.png'),
            image2: require('../assets/LockGreen.png'),
            image3: require('../assets/LockRed.png'),
            test3Sub: 'starts 23 April'
        },
      ]
    }
  }

  changeSeeMore() {
    //console.log(this.state.active)
    this.setState({active: true})
  }

  changeLessMore() {
    //console.log(this.state.active)
    this.setState({active: false})
  }
  

  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
        items.push(
            <Accordian 
                title = {item.title}
                subTitle = {item.subTitle}

                test1 = {item.test1}
                test2 = {item.test2}
                test3 = {item.test3}

                image1 = {item.image1}
                image2 = {item.image2}
                image3 = {item.image3}

                test3Sub = {item.test3Sub}
            />
        );
    }
    return items;
}

    render() {  
        return (  
          <>

            <StatusBar backgroundColor="#760B79" />
            <ScrollView style={{backgroundColor: 'white', }} >
            <View style={{marginLeft: 25, marginRight: 25, marginBottom: 10}} >

             <Image  
                  source={require('../assets/left.png')}
                  style={{height: 40, width: 25,marginLeft: -5, marginBottom: 10}}
              />

              <View style={{flexDirection: 'row', justifyContent:'space-between', }} >
                    <View style={{ borderColor: 'black', borderRadius: 10, borderWidth: 1, height: 169, width: 168}}>  
                      <Image  
                        source={require('../assets/logo.png')}
                        style={{height: 166, width: 166, borderRadius: 10}}
                        />
                    </View>

                    <View style={{  height: 150, width: 158}}>  
                        <Text style={{fontSize: 19}} >How to clear FRA without coaching - Vision IAS</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}} >
                            <Image  
                            source={require('../assets/Play.png')}
                            style={{height: 40, width: 25,marginRight: 10}}
                            />

                            <Text>10 Videos</Text>
                        </View>
                    </View> 
              </View>

              <View style={{height: 2,  backgroundColor: '#E9EcEF', marginTop: 15, marginBottom: 15}} />
              
              <Text style={{fontSize: 18, marginBottom: 5}} >Introduction</Text>

              <View style={{}}>
                  {this.state.active
                  ?
                  <Text style={{fontSize: 14, color: 'grey'}} >This is a representative text. The entire sentence won't be visible at once, but will only feature a preview in collapse mode which will be done.  
                  This is a representative text. The entire sentence won't be visible at once, but will only feature a preview in collapse mode which will be done like this. 
                  <Text style={{color: 'red'}} onPress={() => this.changeLessMore()} > see less</Text> 
                    </Text>
                  :
                  <Text style={{fontSize: 14,color: 'grey'}} >This is a representative text. The entire sentence won't be visible at once, but will only feature a preview in collapse mode which will be  
                        <Text style={{color: 'red'}} onPress={() => this.changeSeeMore()} >   see more</Text> 
                    </Text>
                    }
              </View>

           </View> 

            { this.renderAccordians() }

              <Text> </Text>
        </ScrollView>
        </>
        );  
    }  
}  



export default HomeScreen