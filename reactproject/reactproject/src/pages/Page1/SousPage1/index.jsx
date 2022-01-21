import React, { Component } from "react";
import "./index.less"
import 'antd/dist/antd.min.css';
import { DatePicker } from 'antd';
import { Switch, Button, notification } from 'antd';

export default class SousPage1 extends Component {
    state = {
        disabled: true
    }
    render() {
        return (
            <div className="Sous-Page1">
                <RangePicker />
                <br />
                <Switch disabled={this.state.disabled} defaultChecked />
                <br />
                <Button type="primary" onClick={this.toggle}>
                    Toggle disabled
                </Button>
                
                <Button type="primary" onClick={openNotification}>
                    Open the notification box
                </Button>,
            </div>
        )
    }
    toggle = () => {
        const { disabled } = this.state
        this.setState({ disabled: !disabled });
    };
}
const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

const { RangePicker } = DatePicker;

