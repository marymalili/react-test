import Button from './button/index.js';
import Table from './table/index.js';
import Input from './input/index.js';
import FormItem from './form-item/index.js';
import React from 'react';

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '2',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '3',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '4',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '5',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '6',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '7',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '8',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '9',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公werewr园2号'
    }, {
        key: '10',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '3',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '4',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '5',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '6',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '7',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '8',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }, {
        key: '9',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公werewr园2号'
    }, {
        key: '10',
        name: '吴彦祖',
        age: 42,
        address: '西湖区湖底公园2号'
    }
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    }
];

var AntStudy = React.createClass({
    getInitialState : function(){
        return {
            value : "aaa",
            error :false,
            pageNum : 7
        }
    },
    render : function(){
        return (
            <div>
                <h3>ant-study</h3>
                <Button type='success' icon='home' loading={true}>我是按钮</Button>
                <br/>
                <br/>
                <Input 
                    value={this.state.value}
                    onChange={(e)=>this.setState({value : e.target.value})}
                    onPressEnter={this.enter}/>
                <br/>
                <br/>
                <Table 
                    border 
                    page={true} 
                    pageNum={this.state.pageNum} 
                    onRowClink={this.handleClick} 
                    dataSource={dataSource} 
                    columns={columns}/>
                <br/>
                <br/>
                <FormItem 
                    label='姓名'
                    errmsg='不能包含敏感词汇'
                    error={this.state.error}
                    value={this.state.value}
                    onChange={this.handleChange}/>
            </div>
        )
    },
    enter : function(e){
        console.log(e.target.value);
    },
    handleClick : function(obj){
        alert(JSON.stringify(obj));
    },
    handleChange : function(e){
        if(e.target.value.indexOf('mary')!=-1){
            this.setState({
                error : true
            });
        }else{
            this.setState({
                error : false
            });   
        }
        this.setState({
            value : e.target.value
        });
    }

});

export default AntStudy;