import React from 'react';
import './index.css'
//需求：得到最外层的组件数据？

//1：在外部
/*getChildContext : function(){
    return {
        current : this.props.current
    }
},
//获取子组件的上下问类型
childContextTypes : {
    current : React.PropTypes.number
}*/

//2：在内部
/*
contextTypes : {
    current : React.PropTypes.number
}*/


var Card = React.createClass({
    render : function(){

        return (
            <div className="card">
                {this.props.children}
            </div>
        )
    },
    //设置子组件的上下文环境
    getChildContext : function(){
        return {
            current : this.props.current
        }
    },
    //获取子组件的上下问类型
    childContextTypes : {
        current : React.PropTypes.number
    }
});
var TitleBar = React.createClass({
    render : function(){
        return (
            <div className="title-bar">
                {this.props.children}
            </div>
        )
    }
});
var Title = React.createClass({
    contextTypes : {
        current : React.PropTypes.number
    },
    render : function(){
        var active = "";
        if(this.props.index===this.context.current){
            active = 'active'
        }
        return (
            <div className={active} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
});
var ContentBar = React.createClass({
    render : function(){
        return (
            <div className="content-bar">
                {this.props.children}
            </div>
        )
    }
});
var Content = React.createClass({
    contextTypes : {
        current : React.PropTypes.number
    },
    render : function(){
        var active = "";
        var display = "";
        if(this.props.index===this.context.current){
            active = 'active';
            display = 'block';
        }else {
            display = 'none'
        }
        return (
            <div className={active} style={{display:display}}>
                {this.props.children}
            </div>
        )
    }
})

Card.TitleBar = TitleBar;
Card.Title = Title;
Card.ContentBar = ContentBar;
Card.Content = Content;

export default Card;