import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const DeleteModal = (props) => {


    // console.log(props);
    

    const handleClose = () => props.handleCloseModal()
    // const handleShow = () => setShow(true)

    const handleConfirmed = () => props.deleteComfirmed();
    const title = props.title;
    return(
        <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} sil!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{title} silmek istediğinize emin misisiniz</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
          <Button variant="danger" onClick={handleConfirmed}>
            Sil
          </Button>
        </Modal.Footer>
      </Modal>
    )
}