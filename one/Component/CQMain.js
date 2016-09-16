
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

// 引入外部的组件
var Home = require('../Component/CQHome');
var Find = require('../Component/CQFind');
var Message = require('../Component/CQMessage');
var Mine = require('../Component/CQMine');



//创建类
var Main = React.createClass({
    //初始化方法
    getInitialState(){
        return{
            selectedItem :'home'
        }
    },

    //渲染返回
    render(){
      return(
          <TabBarIOS>
              {/*首页*/}
              <TabBarIOS.Item
                icon={require('image!tabbar_home')}
                title="KS"
                selected={this.state.selectedItem == 'home'}
                onPress={()=>{this.setState({
                selectedItem:'home'
                })}}
              >
                  {/*包装一个导航控制器*/}
                  <NavigatorIOS
                      style={{flex:1}}
                      initialRoute={
                       { //具体的模块
                        component:Home,
                        title:'KS',
                        leftButtonIcon:require('image!navigationbar_friendattention'),
                                                                    rightButtonIcon:require('image!navigationbar_pop')

                        }
                      }
                  />
              </TabBarIOS.Item>

              {/*发现*/}
              <TabBarIOS.Item
                  icon={require('image!tabbar_discover')}
                  title="发现"
                  selected={this.state.selectedItem == 'find'}
                  onPress={()=>{this.setState({
                selectedItem:'find'
                })}}
              >
                  {/*包装一个导航控制器*/}
                  <NavigatorIOS
                      style={{flex:1}}
                      initialRoute={
                       { //具体的模块
                        component:Find,
                        title:'发现',
                        }
                      }
                  />
              </TabBarIOS.Item>

              {/*消息*/}
              <TabBarIOS.Item
                  icon={require('image!tabbar_message_center')}
                  title="消息"
                  selected={this.state.selectedItem == 'message'}
                  onPress={()=>{this.setState({
                selectedItem:'message'
                })}}
              >
                  {/*包装一个导航控制器*/}
                  <NavigatorIOS
                      style={{flex:1}}
                      initialRoute={
                       { //具体的模块
                        component:Message,
                        title:'消息',
                        }
                      }
                  />
              </TabBarIOS.Item>

              {/*我的*/}
              <TabBarIOS.Item
                  icon={require('image!tabbar_profile')}
                  title="我的"
                  selected={this.state.selectedItem == 'mine'}
                  onPress={()=>{this.setState({
                selectedItem:'mine'
                })}}
              >
                  {/*包装一个导航控制器*/}
                  <NavigatorIOS
                      style={{flex:1}}
                      initialRoute={
                       { //具体的模块
                        component:Mine,
                        title:'我的',
                        }
                      }
                  />
              </TabBarIOS.Item>


          </TabBarIOS>


      )
    },


})




const styles = StyleSheet.create({

});

// 输出类
module.exports = Main;