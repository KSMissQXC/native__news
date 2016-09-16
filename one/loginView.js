import React, { Component } from 'react';
import {
    AppRegistry,//注册
    StyleSheet,//样式
    Text,//文本组件
    View,
    Image,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

class loginView extends Component{
    render(){
        return(
            <View style={loginStyle.container}>
                {/*头像*/}
                <Image source={require('./img/icon.png')} style={loginStyle.iconStyle}/>
                {/*账号和密码*/}
                <TextInput placeholder={'请输入用户名'} style={loginStyle.textInputStyle} />
                <TextInput placeholder={'请输入密码'} password={true} style={loginStyle.textInputStyle} />
                {/*登录*/}
                <View style={loginStyle.loginBtnStyle}>
                    <Text style={{color: 'white'}}>登录</Text>
                </View>

                {/*设置*/}
                <View style={loginStyle.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>

                {/*其他登录方式*/}
                <View style={loginStyle.otherStyle}>
                    <Text>其他登录方式:</Text>
                    <Image  source={require('./img/icon3.png')} style={loginStyle.otherImageStyle} />
                    <Image  source={require('./img/icon7.png')} style={loginStyle.otherImageStyle} />
                    <Image  source={require('./img/icon8.png')} style={loginStyle.otherImageStyle} />

                </View>

            </View>


        );
    }


}

const loginStyle = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#dddddd',
        //设置侧轴的对齐方式
        alignItems:'center'
    },
    iconStyle: {
        marginTop:50,
        marginBottom:30,
        width:80,
        height:80,
        borderRadius:40

    },
    textInputStyle:{
        height:38,
        backgroundColor:'white',
        marginBottom:1,
        textAlign:'center'


    },
    loginBtnStyle:{
        height:35,
        width:width * 0.85,
        backgroundColor:'blue',
        marginTop:30,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15


    },
    settingStyle:{
        //设置主轴方向
        flexDirection:'row',
        //主轴的对齐方式
        justifyContent:'space-between',
        width:width * 0.85

    },
    otherStyle:{
        //设置主轴方向
        flexDirection:'row',
        //设置侧轴的对齐方式
        alignItems:'center',
        //绝对定位
        position:'absolute',
        bottom:10,
        left:20


    },
    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:8

    }

});


//输出类
module.exports = loginView;