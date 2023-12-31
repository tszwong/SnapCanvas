import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as events from "events";

const Profile = ({ imageSrc, altText, name, major, description }) => {
    const [modalShow, setModalShow] = useState(false);

    // Handler for closing the modal
    const handleClose = (event) => {
        if (event) {
            event.stopPropagation();
        }
        console.log('Close button clicked');  // for debugging, checking if the handler recognizes the button being pressed
        setModalShow(false);  // close the modal, update the state
    };


    return (
        <div className="col-md-3" onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }}>
            <img src={imageSrc} alt={altText} className="img-fluid" id={"profile-photo"}/>
            <p id={"profile-photo-caption"}>{name}, {major}</p>

            {/* content that shows up in the modal when the images are clicked */}
            <Modal show={modalShow} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {name} - {major}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imageSrc} alt="profile" className={"img-fluid modal-img"}/>
                    {/*  add a short description of each member  */}
                    <div className={"modal-desc"}>
                        {description}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* button to close the modal, can be placed elsewhere */}
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Profile;
