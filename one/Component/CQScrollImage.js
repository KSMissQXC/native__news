
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
    View,
    ScrollView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 引入计时器类库
var TimerMixin = require('react-timer-mixin');

var ScrollImage = React.createClass({
    //注册计时器
    mixins:[TimerMixin],

    //设定固定值
    getDefaultProps(){
        return{
            //每隔多长时间滚动
            duration:1000,

            //所有的Image对象数组
            imageDataArr:[]
        }
    },

    //设置可变的初始值
    getInitialState(){
        return{
            //当前的页码
            currentPage:0,
            //标题
            title:this.props.imageDataArr[0].title
        }
    },

    //渲染
    render(){
        return(
            <View
                style={sytles.container}
            >
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    //当一帧滚动结束
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                    //开始拖拽
                    onScrollBeginDrag={this.onScrollDrag}
                    //停止拖拽
                    onScrollEndDrag={this.endDrag}
                >
                    {this.renderAllImage()}
                </ScrollView>

                {/*返回指示器*/}
                <View
                    style={sytles.pageViewStyle}
                >
                    {/*对应的标题*/}
                    <Text
                        style={{color:'white'}}
                    >
                        {this.state.title}
                    </Text>
                    {/*返回5个圆点*/}
                    <View
                        style={{flexDirection:'row'}}
                    >
                        {this.renderPageCircle()}

                    </View>



                </View>

            </View>


        )
    },

    //圆点
    renderPageCircle(){
        var indicatorArr = [];
        var style;
        var imagsArr = this.props.imageDataArr;
        for (var i = 0;i < imagsArr.length;i++){
            style = (i == this.state.currentPage) ? {color:'orange'} : {color:'#ffffff'};
            indicatorArr.push(
                <Text
                    key={i}
                    style={[{fontSize:25},style]}
                >
                    &bull;
                </Text>
            )

        }
        return indicatorArr;
    },

    renderAllImage(){
        var allImage = [];
        var imgsArr = this.props.imageDataArr;
        for (var i = 0;i < imgsArr.length;i++){
            var imgItem = imgsArr[i];
            allImage.push(
                <Image
                    key={i}
                    source={{uri:imgItem.imgsrc}}
                    style={{width:width,height:140}}
                />
            );
        }

        return allImage;

    },

    //实现一些复杂的操作
    componentDidMount(){
        this.startTimer();
    },

    //开启定时器
    startTimer(){
        var scrollView = this.refs.scrollView;
        var imgCount = this.props.imageDataArr.length;
        //添加定时器
        this.timer = this.setInterval(function () {
          var activePage = 0;
          if ((this.state.currentPage + 1) >= imgCount){
              activePage = 0;
          }else {
              activePage = this.state.currentPage + 1;
          }
            
          //更新状态机
            this.setState({
                currentPage:activePage,


            })
            
           var offsetX = activePage * width;
            scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});
            
            
            
        },this.props.duration);
        
    },
    
    onAnimationEnd(e){
        //求出水平方向的偏移量
        var offsetX = e.nativeEvent.contentOffset.x;

        //求出当前的页数
        var currentPage = Math.floor(offsetX / width);

        //更新状态机,重新绘制UI
        this.setState({
            //当前的页码
            currentPage:currentPage,
            //标题
            title: this.props.imageDataArr[currentPage].title

        })
    },
    
    onScrollDrag(){
        this.clearInterval(this.timer);
    },
    
    endDrag(){
        this.startTimer();
    }







})

const sytles = StyleSheet.create({
    container:{
        
    },
    pageViewStyle:{
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.4)',
        
        //定位
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },

})




// 输出
module.exports = ScrollImage;
