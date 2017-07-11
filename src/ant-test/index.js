import React from 'react';
import {Button,Col,Row,Table,Rate} from 'antd';
import 'antd/dist/antd.css';

var header = [
    {title:'name',dataIndex:'name'},
    {title:'age',dataIndex:'age'},
    {title:'sex',dataIndex:'sex'},
];

var data = [
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
];


var AntTest = React.createClass({
    getInitialState : function(){
        console.log("111")
        return {
            loading : false
        }
    },
    render : function(){
        return (
            <div style={{padding:20}}>
                <Row >
                    <Col span={4}>
                        <Button>hello word</Button>
                    </Col>
                    
                </Row>
                <Row>

                </Row>
                <Row >
                    <Col >
                        {/*<Table dataSource={data} columns={header}/>*/}
                    </Col>
                    
                </Row>
            </div>
               
        )  
    },
    ajax : function(){
        console.log("asd");
        this.setState({
            loading : !this.state.loading
        })
    }
});

export default AntTest;
