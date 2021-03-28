import React, {Component} from 'react';
import { View, TouchableOpacity, Text,Image, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
         
          subTitle: props.subTitle,
          test1: props.test1,
          test2: props.test2,
          test3: props.test3,

          image1: props.image1,
          image2: props.image2,
          image3: props.image3,

          test3Sub: props.test3Sub,
          expanded : false,
        }

    }
  
  render() {

    var imagePath1 = this.props.image1;
    var imagePath2= this.props.image2;
    var imagePath3 = this.props.image3;

   

    return (
       <View style={{}} >
           <View>
           <TouchableOpacity ref={this.accordian}  style={styles.row} onPress={()=>this.toggleExpand()}>
                <View style={{flexDirection: 'row', marginLeft: 10, justifyContent: 'space-between',alignItems:'center'}}>
                <Text style={{fontSize: 16, marginLeft: 5,fontWeight: '700'}}>{this.props.title}</Text>
               
                <Icon style={{marginRight: 10,}} name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={32}  />
            
                </View>
                <Text style={{fontSize: 14, marginLeft: 15, marginBottom: 5, color: 'grey' }}>{this.props.subTitle}</Text>
               </TouchableOpacity>
            
           </View>
           
            {
                this.state.expanded &&
                <View style={styles.child}>
                   <View style={{flexDirection: 'row', marginLeft: 15, alignItems: 'center', marginBottom: 10}} >
                        <Image
                            source={imagePath1}
                            style={{height: 30, width: 30,}}
                        />
                        <Text style={{marginLeft: 10, }} >{this.props.test1}</Text>   
                   </View>
                   <View style={{flexDirection: 'row',  marginLeft: 15, alignItems: 'center', marginBottom: 10}} >
                        <Image
                            source={imagePath2}
                            style={{height: 30, width: 30,}}
                        />
                        <Text  style={{marginLeft: 10}} >{this.props.test2}</Text>   
                   </View>
                   <View style={{flexDirection: 'row',  alignItems: 'center', marginBottom: 10}} >
                        <View style={{ marginLeft: 15, alignItems: 'center'}}>
                            <Image
                                source={imagePath3}
                                style={{height: 30, width: 30,}}
                            />
                        </View>
                        <View>
                            <Text style={{marginLeft: 10, fontSize: 14}} >{this.props.test3}</Text> 
                            <Text style={{marginLeft: 10, fontSize: 12, color: 'grey'}} >{this.props.test3Sub}</Text>   
                        </View>
                   </View>

                   
                </View>
            }
        
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: 'black',
    },
    row:{
        //flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 80,
        marginLeft: 25,
        marginRight: 25,
        //marginBottom:20,
        marginTop: 10,
        // paddingLeft:25,
        // paddingRight:18,
        //alignItems:'center',
        backgroundColor: 'white',
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 4,
    },
    parentHr:{
        height:1,
        //color: 'white',
        width:'100%'
    },
    child:{
        backgroundColor: 'white',
        borderRadius:4,
        padding:16,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 0.49,

        elevation: 4,
            }
    
});