import TodoList from './todo-list/index.js';
import React from 'react';

function id(){
    return Math.random().toString().replace(/\./,'')+'-'+Math.random().toString().replace(/\./,'')
}
var cache = [];
var TodoMVC = React.createClass({
    getInitialState : function(){
        return {
            items : [
                {text:'aaa',id:id(),type:"active"},
                {text:'bbb',id:id(),type:"complete"},
                {text:'ccc',id:id(),type:"active"}
            ] ,
            value : '请输入内容',
            type : 'active'
        }
    },
    render : function(){
        var items = this.state.items,
            type = this.state.type
        var json = [];
        items.map(function(obj){
            if (obj.type == type || type=='all'){
                json.push(obj) 
            }
        });
        return (
            <div className="todo-mvc">
                <h3>todos</h3>
                <p>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>提交</button>
                </p>
                <TodoList 
                    items={json}
                    onDelete= {this.handleDelete}
                    onEdit = {this.handleEdit}
                    onType = {this.handleType}/>
                <div>
                    <button  style={{background:this.state.type=='all'?'red':'#ddd'}} onClick={(e)=>this.setState({type:'all'})}>All</button>
                    <button  style={{background:this.state.type=='active'?'red':'#ddd'}} onClick={(e)=>this.setState({type:'active'})}>Active</button>
                    <button  style={{background:this.state.type=='complete'?'red':'#ddd'}} onClick={(e)=>this.setState({type:'complete'})}>Complete</button>
                </div>
                
            </div>
        )
    },
    handleType : function(obj,type){
        var items = this.state.items,
        items = items.map(function(o){
            if (o.id ==obj.id){
                o.type = type ;
            } 
            return o;
        });
        this.setState({
            items : items
        });

    },
    handleAdd : function(){
        var items = this.state.items;
        var newItem = {
            text : this.state.value ,
            id : id()
        };
        items.push(newItem);
        this.setState({
            items : items,
            value : '',
            cache : items
        }) 
        cache = items;
    },
    handleChange : function(e){
        this.setState({
            value : e.target.value
        })
    },
    handleDelete : function(obj){
        var items = this.state.items;
        var newItems = [];
        for(var i=0;i<items.length;i++){
            if(items[i].id!==obj.id){
                newItems.push(items[i])
            }
        } 
        this.setState({
            items : newItems
        })  
        cache = newItems;
    },
    handleEdit : function(obj){
        console.log('初始缓存',cache);
        console.log('obj',obj)
        var items = this.state.items;
        items = items.map(function(o){
            if(o.id==obj.id){
                o.text=obj.text;
            }
            return o;
        });
        cache =cache.map(function(o){
            if(o.id==obj.id){
                o.text=obj.text;
            }
            return o;
        });
        this.setState({
            items : items
        }); 
        cache = cache;
        console.log('数据',this.state.items)
        console.log('缓存',cache)

    }
})
export default TodoMVC;