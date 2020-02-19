import React ,{useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

function LargeModal(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Directions 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
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
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Get Direction!
        </Button>
  
        <LargeModal size = "xl" show={modalShow} onHide={() => setModalShow(false)}>
            {props.children}
        </LargeModal>
      </ButtonToolbar>
    );
  }

  
export default MapModal;