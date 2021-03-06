import React,{Component, useContext} from 'react';
import { Alert, Button,useWindowDimensions, TouchableOpacity, Image, View, Text, SafeAreaView, StyleSheet, FlatList, Animated, Touchable } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions, Platfrom, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../contexts';
import { logout } from '../utils/firebase';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const StyledText = styled.Text`
  font-size: 30px;
  
`;
const styles = StyleSheet.create({
  
  etc_content: {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 30,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,

  },
  etc_button: {
    marginLeft: 16,
    marginRight: 16,
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
    height: wp('100%')/375*50,
    justifyContent : 'center',
  },
  info_container_0 : {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('100%')-32,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 40,

  },
  info_container_1 : {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('100%')-32,
    marginLeft: 16,
    marginRight: 16,

  },
  info_container_2 : {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: wp('50%')-16,
    marginBottom: Platform.OS === 'ios' ? 0 : 10,
  },
  info_text : {
    fontFamily: 'NotoSansKR_500Medium',
    includeFontPadding: false,
    lineHeight: 30,
    fontSize: 12,

  },
  info_last_text: {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 10,
    marginLeft:16,
    color:'gray',
  },
  info_last_text_first: {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 10,
    marginLeft:16,
    color:'gray',
    marginTop: 10,
  },
  info_last_text_last: {
    fontFamily: 'NotoSansKR_400Regular',
    includeFontPadding: false,
    //lineHeight: 20,
    fontSize: 10,
    marginLeft:16,
    color:'gray',
    marginBottom: 50,
  },

  screen_container : {
    height: hp('100%')-120,
    justifyContent : 'space-between',
    //backgroundColor : 'red'
  }

});


export const etc = ({navigation}) => {
  const {user} = useContext(UserContext);
  const {dispatch} = useContext(UserContext);
  const _handleLogout = async() => {
    try{
      await logout();
      Alert.alert('Logout Success', user.email);
    } catch(e){
      console.log('[Profile] logout: ', e.message);
    }finally{
      dispatch({});
    }
  };
    return (
      
      <SafeAreaView>     
        <ScrollView style={{backgroundColor:'#ffffff',}}>
        <View style={styles.screen_container}>
  
      <View>
      <TouchableOpacity  onPress= {() => navigation.navigate('Notice')} style={styles.etc_button}>
        <Text style={styles.etc_content}>????????????</Text>
  
      </TouchableOpacity>
      <TouchableOpacity onPress= {() => navigation.navigate('Question')} style={styles.etc_button}>
          <Text style={styles.etc_content}>???????????? ??????</Text>
      </TouchableOpacity>
      {user?.uid && user?.email ? 
      <TouchableOpacity onPress= {() => navigation.navigate('User_admin')} style={styles.etc_button}>
        <Text style={styles.etc_content}>?????? ??????</Text>
      </TouchableOpacity>: <TouchableOpacity></TouchableOpacity>}
        {user?.uid && user?.email ? 
        <TouchableOpacity style={styles.etc_button} onPress={_handleLogout}>
        <Text style={styles.etc_content}>????????????</Text>
        </TouchableOpacity>:  <TouchableOpacity style={styles.etc_button} onPress= {() => navigation.navigate('Login')}><Text style={styles.etc_content}>?????????</Text></TouchableOpacity>}
      </View>

      <View>
        <View style={styles.info_container_0}>

        <View style={styles.info_container_2}>
          <TouchableOpacity onPress= {() => navigation.navigate('Use_term_info', "use_term")}>
            <Text style={styles.info_text}>?????? ??????</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info_container_2}>
          <TouchableOpacity onPress= {() => navigation.navigate('Service_intro')}>
          <Text style={styles.info_text}>WARD ????????? ??????</Text>
          </TouchableOpacity>
        </View>
        </View>
          <View style={styles.info_container_1}>

          <View style={styles.info_container_2}>
            <TouchableOpacity onPress= {() => navigation.navigate('Personal_info', "personal")}>
            <Text style={styles.info_text}>?????? ?????? ??????</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.info_container_2}>
            <TouchableOpacity onPress= {() => navigation.navigate('Recruiting')}>
            <Text style={styles.info_text}>WARD ??????</Text>
            </TouchableOpacity>
          </View>
          </View>

          <Text style={styles.info_last_text_first}>WARD invest(???) | ?????? ????????? | 010-9229-9388</Text>
          <Text style={styles.info_last_text}>??????????????? ????????? ????????? 291 w5-2 2??? ( ?????????????????????, ?????????????????????)</Text>
          <Text style={styles.info_last_text_last}>copyright ?? WARD All rights reserved</Text>

        </View>

        </View>
      </ScrollView>
      
    </SafeAreaView>
    );
};

export default etc;