
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
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
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log('props in share modal--->', this.props)
    return (
      <div>
         <Icon type="share-alt" 
        style={{ fontSize: "40px", color: "#08c" }}
        onClick={this.showModal}/>
        <Modal
          title="Share This Place With Your Friends!"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ShareButton  url={this.props.rst_id}/>
        </Modal>
      </div>
    );
  }
}

export default ShareModal
// ReactDOM.render(<App />, document.getElementById('container'));
