import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import CameraEnhanceTwoToneIcon from "@material-ui/icons/CameraEnhanceTwoTone";


export default function CameraAccess() {
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

class App extends React.Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Fab color="secondary" aria-label="add">
          <CameraEnhanceTwoToneIcon type="primary" onClick={this.showModal}>
            Open Modal with async logic
          </CameraEnhanceTwoToneIcon>
        </Fab>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}