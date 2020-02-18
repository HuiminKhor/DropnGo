import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import MyQr from '../components/qrcode'


const Qrgen = (props) => {
  const {
    className,
    modal,
    toggle,
    booking_id,
  } = props;


  return (
    <div>
      {/* <h1>{props.booking_id}</h1>
      <MyQr id={booking_id}/> */}
      <Modal isOpen={modal} toggle={toggle} className={className} style={{position:"absolute", top:"50%", left:"50%",  transform: "translate(-50%, -50%)"}}>
        <ModalHeader toggle={toggle} style={{textAlign:"center"}}> Show This QR Code</ModalHeader>
        <ModalBody style={{textAlign:"center"}}>
            <MyQr id={booking_id}/>
            <p className="showQrCode">Show this QR code at the counter from the store that you have booked to store and retrieve your luggage</p>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Qrgen;