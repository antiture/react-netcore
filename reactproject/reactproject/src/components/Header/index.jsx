import React, { Component } from "react";
import "./index.less"
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.min.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="logo">LOGO</div>
                <Breadcrumb>
                    <Breadcrumb.Item> </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
} 