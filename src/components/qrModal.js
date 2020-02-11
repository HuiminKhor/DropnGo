import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MyQr from '../pages/qrcode'
import { useHistory } from 'react-router-dom'


const Qrgen = (props) => {
  const {
    buttonLabel,
    className,modal,toggle
  } = props;

  

  return (
    <div>
      {/* <Button color="danger" >{buttonLabel}</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className} style={{position:"absolute", top:"50%", left:"50%",  transform: "translate(-50%, -50%)"}}>
        <ModalHeader toggle={toggle} style={{textAlign:"center"}}>Luggage Location</ModalHeader>
        <ModalBody style={{textAlign:"center"}}>
            <MyQr />
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default Qrgen;