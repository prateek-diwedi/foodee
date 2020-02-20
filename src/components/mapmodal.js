import React ,{useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import {Icon} from 'antd';
function LargeModal(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Directions - Walking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div height ="60ch">
          {props.children}
          </div>
         </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function MapModal(props) {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <ButtonToolbar>
        <Icon style ={{fontSize: '40px', color: '#08c'}} type="environment"  variant="primary" onClick={() => setModalShow(true)} />
        
  
        <LargeModal size = "lg" show={modalShow} onHide={() => setModalShow(false)}>
            {props.children}
        </LargeModal>
      </ButtonToolbar>
    );
  }

  
export default MapModal;