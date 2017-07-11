import React from 'react';
import './index.css'

var Button = React.createClass({
    render : function(){
        return (
            <button className={'btn '+this.props.type+' '+this.props.icon}>{this.props.children}{this.props.loading?"···":null}</button>
        )
    }
});

export default Button;