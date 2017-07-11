import ChildA from './child-a/index.js';
import ChildB from './child-b/index.js';//导入的变量必须写最上边
import ChildC from './child-c/index.js';
import ChildD from './child-d/index.js';
var request = require('superagent');
var React = require('react');
require ('./App.css');


var App = React.createClass( {
  getDefaultProps : function(){//设置组件默认属性
    console.log("111","getDefaultProps");
  },
  getInitialState : function(){//设置组件初始化状态
    console.log("222","getInitialState");
    return {
      name : 'app',
    }
  },
  componentWillMount : function(){
    console.log("333","componentWillMount");
  },
  render : function() {
    console.log ("444","render");
    return (
      <div className="App">
        <h3>hello {this.state.name}</h3>
          <ChildA/>
          <ChildB/>
          <ChildC/>
          <ChildD/>
      </div>
    );
  },
  componentDidMount : function(){//组件渲染完毕

    
    /*request
      .get('http://localhost:3000/101.200.129')
      .end(function(err, res){
        console.log(res)
      });*/

    console.log ("555","componentDidMount");
  },
  componentWillUpdata : function(){
    console.log ("666","componentWillUpdata");
  },
  componentWillReceiveProps : function(){
    console.log ("777","componentWillReceiveProps");
  }
})


export default App;//把app导出
