import React,{Component, useState, useEffect} from 'react';
import { Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from 'react-native-image-slider-box';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked'
import Ranking from '../components/ranking';
import { NavigationContainer } from '@react-navigation/native';
import { DB } from '../utils/firebase';
import { setStatusBarStyle } from 'expo-status-bar';
import { DraggableGrid } from 'react-native-draggable-grid';

const styles = StyleSheet.create({
    
    img_container : {
      
      justifyContent : 'center',
      alignContent : 'center',

    },
    title_text : {
      fontFamily: 'NotoSansKR_700Bold',
      includeFontPadding: false,
      color : 'white',
      fontSize: 18,
      position : 'absolute',
    },

    container_1 : {
        backgroundColor : 'red',
        alignContent : 'center',
    },




      wrapper:{
        paddingTop:40,
        width:wp('100%')-32,
        height:'100%',
        justifyContent:'center',
        marginHorizontal : 16,
      },
      item_container:{
        width:(wp('100%')-100)/4,
        height:(wp('100%')-50)/4,
        borderRadius:10,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
      },
      item_text:{
        fontSize:18,
        color:'#FFFFFF',
        fontFamily: 'NotoSansKR_700Bold',
        includeFontPadding: false,
     
      },

})

const Thema_color_list = ['#DC737D', '#9F96EA', '#698ED4','#E19E82','#76B0D0','#76C5A0',
'#D681E3','#C89E7F','#F9AC73','#52B2CF','#7FC4DD']

export class MyTest extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {name:'?????????',key:'0'},
        {name:'????????????',key:'1'},
        {name:'?????????',key:'2'},
        {name:'??????',key:'3'},
        {name:'2??? ??????',key:'4'},
        {name:'LED',key:'5'},
        {name:'??????',key:'6'},
        {name:'????????????',key:'7'},
        {name:'??????',key:'8'},
        {name:'????????????',key:'9'},
        {name:'?????????',key:'10'},
        {name:' ',key:'11'},
      ],
    };
  }

  render_item = (item) => {
    return (
      
      <View style={{ 
        width:(wp('100%')-50)/4,
        height:(wp('100%')-50)/4,
        borderRadius:10,
        backgroundColor:Thema_color_list[item.key%10],
        justifyContent:'center',
        alignItems:'center',}} key={item.key}>
        <Text style={styles.item_text}>{item.name}</Text>
      </View>
      
      
    );
  }

  
  render() {
    return (
      <View style={styles.wrapper}>
        <DraggableGrid
          numColumns={4}
          renderItem={this.render_item}
          data={this.state.data}
          disabledResorted = {true}
          onDragRelease={(data) => {
            this.setState({data});
          }}
          onDragStart={this.onDragStart}
        />
      </View>
    );
  }
}

const Thema = ({navigation}) => {

    return(
        <SafeAreaView style={{backgroundColor:'#ffffff',}}>
        
            <Text>??? ????????? ????????? ???????????? ??????????????????!</Text>
           <MyTest/>
        
        </SafeAreaView>
    );
};

export default Thema;

