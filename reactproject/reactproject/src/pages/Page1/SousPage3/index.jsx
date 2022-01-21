import React, { Component, useState } from "react";
import { Modal, Button } from 'antd';
import "./index.less"
import 'antd/dist/antd.min.css';

export default class SousPage3 extends Component {

    render() {
        return (
            <div className="SousPage3">
                <ModalOpen />
                <Modal2/>
            </div>
        )
    }
}

const ModalOpen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Modal1
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>here</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
const Modal2 = () => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button type="primary" onClick={() => setVisible(true)}>
          Modal2
        </Button>
        <Modal
          title="Modal 1000px width"
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </>
    );
  };
