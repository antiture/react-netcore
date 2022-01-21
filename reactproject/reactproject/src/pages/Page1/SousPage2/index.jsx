import React, { Component } from "react";
import "./index.less"
import 'antd/dist/antd.min.css'; 
import { Switch  } from 'antd';

export default class SousPage2 extends Component {
    state = {
        disabled: true
    }
    render() {
        return (
            <div className="Sous-Page2">  
                <Switch defaultChecked />
                 
            </div>
        )
    } 
}

 

