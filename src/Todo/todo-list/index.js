import React from 'react';

var TodoItem = React.createClass({
    getInitialState : function(){
        return {
            value : this.props.text
        }

    },
    render : function(){
        return (
            <li >
                <button onClick={(e)=>this.props.toggle(this.props.o,this.props.type=='active'?'complete':'active')}>{this.props.type=='active'?'active -> complete':'complete -> active'}</button>
                {this.props.text}
                <button type="button" onClick={(e)=>this.props.delet(this.props.o)}>
                    删除
                {/*点击事件也可以写成
                    onClick={this.props.delete.bind(this,this.props.o)}
                */}
                </button>
                <div>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleEdit}>确定</button>
                    <button onClick={this.handleCancel} >取消</button>
                </div> 
                <br/>
            </li>
        )
    },
    handleChange : function(e){
        this.setState({
            value : e.target.value
        })
    },
    handleEdit : function(){
        var obj = {
            id : this.props.id,
            text : this.state.value,
            status : this.state.status,
        }
        this.props.edit(obj)
    },
    handleCancel : function(){
        this.setState({
            value : this.props.text
        })
    }
});

var TodoList = React.createClass({
    render : function(){
        var that = this;
        var nodes = this.props.items.map(function(o){
            return (
                <TodoItem 
                    items={that.props.itmes}
                    key={o.id} 
                    id={o.id}
                    text={o.text} 
                    type={o.type}
                    delete={that.props.onDelete} 
                    toggle={that.props.onType}
                    o={o}
                    edit={that.props.onEdit}/>
            )  
        });
        return (
            <ul>
                {nodes}
            </ul>
        )
    }

});
export default TodoList;