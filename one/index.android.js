/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class one extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          hello,world!
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },

})


//第四个程序
//引入
var Dimensions = require('Dimensions');
var {width, height,scale} = Dimensions.get('window');

class Demo4 extends Component{
  render(){
    return(
        <View style={styleDemo4.outViewStyle}>
          <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
          <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
          <Text>当前屏幕的分辨率:{Dimensions.get('window').scale}</Text>


        </View>

    );
  }
}




const styleDemo4 = StyleSheet.create({
  outViewStyle:{
    //占满整个屏幕
    flex:1,
    //主轴方向居中
    justifyContent:'center',

    //侧轴方向居中
    alignItems:'center',
    //背景
    backgroundColor:'orange'
  }



})







AppRegistry.registerComponent('one', () => Demo4);

