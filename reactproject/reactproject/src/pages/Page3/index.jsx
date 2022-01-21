import React, { Component } from "react";
import "./index.less"
import 'antd/dist/antd.min.css';
import { DatePicker } from 'antd';
import { Switch, Button } from 'antd';

export default class Page3 extends Component {
    state = {
        disabled: true
    }
    render() {
        return (
            <div className="Page3">
                <RangePicker />
                <br />
                <Switch disabled={this.state.disabled} defaultChecked />
                <br />
                <Button type="primary" onClick={this.toggle}>
                    Toggle disabled
                </Button> 
            </div>
        )
    }
    toggle = () => {
        const { disabled } = this.state
        this.setState({ disabled: !disabled });
    };
}


const { RangePicker } = DatePicker;

