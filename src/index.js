import React from 'react';
import ReactDOM from 'react-dom';
//import TodoMVC from './Todo/index.js';
//import AntTest from './ant-test/index.js';
//import AntStudy from './ant-study/index.js';
import AntStudy2 from './ant-study/index2.js';
//import './index.css';
import registerServiceWorker from './registerServiceWorker';

//import是用来加载模块的,只有别的模块变量导出了，这里才能导入，人家不到出，你就导不进来


ReactDOM.render(<AntStudy2/>, document.getElementById('root'));
registerServiceWorker();










/*import {text,obj} from './aa.js'

console.log(text,obj)*/