/// 路由组件没有props


import React, { Component } from "react";
import "./index.less"
import MyNavLink from '../../components/blocks/MyNavLink';
import { Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import SousPage1 from './SousPage1';
import SousPage2 from './SousPage2';
import SousPage3 from './SousPage3';

export default class Page1 extends Component {
    render() {
        return (
            <div className="Page1">
                <div className="ctn-sous-link"> 
                    <MyNavLink to="/Page1/SousPage1">SousPage1</MyNavLink>
                    <MyNavLink to="/Page1/SousPage2">SousPage2</MyNavLink>
                    <MyNavLink to="/Page1/SousPage3">SousPage3</MyNavLink>
                </div>
                <div className="ctn-page">
                    {/* 注册路由 */}
                    <Routes>
                        <Route path="/SousPage1" element={<SousPage1 />} />
                        <Route path="/SousPage2" element={<SousPage2 />} />
                        <Route path="/SousPage3" element={<SousPage3 />} />
                    </Routes>
                </div>
            </div>

        )
    }

} 