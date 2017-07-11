import React from 'react';
import './index.css'

var FormItem = React.createClass({
    render : function(){
        return (
            <div className='form-item'>
                <p>
                    <lable>{this.props.label}</lable>
                    <input 
                        value={this.props.value}
                        onChange={this.props.onChange}/>
                </p>
                <p style={{display:this.props.error?'block':'none'}}>
                    {this.props.errmsg}
                </p>
            </div>      
        )
    }
})
export default FormItem;
