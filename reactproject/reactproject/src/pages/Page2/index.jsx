import React, { Component } from "react";
import "./index.less"
import { Menu, Dropdown, Button,  Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';

export default class Page2 extends Component {
    render() {
        return (
            <div className="Page2">
            <div className="ctn-button ctn-item">

                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <Button>bottomLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                    <Button>bottomCenter</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                    <Button>bottomRight</Button>
                </Dropdown>
                <br />
                <Dropdown overlay={menu} placement="topLeft" arrow>
                    <Button>topLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="topCenter" arrow>
                    <Button>topCenter</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="topRight" arrow>
                    <Button>topRight</Button>
                </Dropdown>
            </div>
                <div className="ctn-search ctn-item">
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="primary" shape="circle">
                        A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <br />
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Button icon={<SearchOutlined />} href="https://www.google.com" />
                    <br />
                    <br />
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
                    </Tooltip>
                    <Button type="primary" shape="circle" size="large">
                        A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />} size="large">
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} size="large" />
                    </Tooltip>
                    <Button icon={<SearchOutlined />} size="large">
                        Search
                    </Button>
                    <br />
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} size="large" />
                    </Tooltip>
                    <Button icon={<SearchOutlined />} size="large">
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />} size="large">
                        Search
                    </Button>

                </div>

            </div>
        )
    }

}


const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);