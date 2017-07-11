import React from 'react';
import './index.css';


var Table = React.createClass({
    getInitialState : function(){
        return {
            pageState :this.props.page,
            pageNum : this.props.pageNum,
            pageStart :  this.props.pageNum,
            backgroundColor : "#569FE8",
            color : "#fff"
        }
    },
    renderData : function(pagenum){
        var data = this.props.dataSource;
        var pageData = [];
        var base = this.state.pageStart;
        for (var i=pagenum-base;i<(pagenum<data.length?pagenum:data.length);i++){
            pageData.push(data[i])
        }
        var tableData = this.state.pageState?pageData:data; 
        console.log(tableData);
        return(tableData)         
    },
    next : function(){
        var pageNum = this.state.pageNum;
        var pageStart = this.state.pageStart;
        console.log(this.props.dataSource.length);
        this.setState({
           pageNum : pageNum+pageStart>=this.props.dataSource.length+pageStart?pageNum:pageNum+pageStart
        });
    },
    prev : function(){
        var pageNum = this.state.pageNum;
        var pageStart = this.state.pageStart;
        this.setState({
           pageNum : pageNum-pageStart==0?pageNum:pageNum-pageStart
        });
    },
    btnClick : function(e){
        var pageStart = this.state.pageStart;
        // e.target.style.backgroundColor = this.state.backgroundColor;
        // e.target.style.color = this.state.color;
        this.setState({
           pageNum : pageStart*(Number(e.target.textContent)),
        });
    },
    render : function(){
        console.log(this.state.pageNum);
        var header = this.props.columns;        
        var arr = [];
        var that =this;
        var headerNodes = header.map(function(obj){
            arr.push(obj.dataIndex);
            return (
                <th style={{border:that.props.border?'1px solid #ccc':'none'}} key={obj.key}>{obj.title}</th>
            )
        });
        var bodyNodes = this.renderData(this.state.pageNum).map(function(obj,i){
            var col = arr.map(function(o){
                return(
                    <td  style={{border:that.props.border?'1px solid #ccc':'none'}}   key={o+"-"+i*Math.random()}>{obj[o]}</td>
                )
            });
            return (
                <tr onClick={(e)=>that.props.onRowClink(obj)}  key={obj.key} >{col}</tr>
            )
        });
        var pagebtnNum = Math.ceil(this.props.dataSource.length/this.state.pageStart);
        var btnSpan=[];
        for(var j=0;j<pagebtnNum;j++){
            btnSpan.push(<span key={j} onClick={this.btnClick}>{j+1}</span>)
        }
        console.log(btnSpan);
        var pageBtns =(
            <div>
                {btnSpan}
            </div>
        ) 
        if(this.state.pageState){
            var pageBox = (
                <div className='page-box'>
                    <span style={{display:this.state.pageNum==5?'none':'block'}} onClick={this.prev}>上一页</span>
                    {pageBtns}
                    <span style={{display:this.state.pageNum>=this.props.dataSource.length?'none':'block'}} onClick={this.next}>下一页</span>
                </div>
            )
        }


        return (
            <div>
                <table style={{border:this.props.border?'1px solid #ccc':'none', 'borderCollapse': 'collapse'}} >
                    <thead>
                        <tr >
                            {headerNodes}
                        </tr>
                    </thead>
                    <tbody>
                        {bodyNodes}
                    </tbody>
                </table>
                {pageBox}
            </div>
        )
    }
});

export default Table; 