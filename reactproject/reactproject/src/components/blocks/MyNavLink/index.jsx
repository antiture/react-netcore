import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.less" 

export default class MyNavLink extends Component {
    render() { 
        return (
            <div className="My-Nav-Link">
                <NavLink className="link" {...this.props}>{this.props.children}</NavLink> 
                {/* 标签体内容在 props里 */}
            </div>
        )
    }
} 