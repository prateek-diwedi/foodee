import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Icon } from 'antd';
import ShareButton from "./ShareButtons"

export class ShareModal extends React.Component {
  constructor(props) {
    super(props);

  }
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Icon type="share-alt"
          style={{ fontSize: "40px", color: "#08c" }}
          onClick={this.showModal} />
        <Modal
          title="Share This Place With Your Friends!"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ShareButton url={this.props.rst_id} loc={this.props.loc} />
        </Modal>
      </div>
    );
  }
}

export default ShareModal;
