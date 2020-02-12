import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MyQr from '../components/qrcode'


const Qrgen = (props) => {
  const {
    buttonLabel,
    className,modal,toggle
  } = props;

  

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{position:"absolute", top:"50%", left:"50%",  transform: "translate(-50%, -50%)"}}>
        <ModalHeader toggle={toggle} style={{textAlign:"center"}}>Luggage Location</ModalHeader>
        <ModalBody style={{textAlign:"center"}}>
            <MyQr />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Qrgen;