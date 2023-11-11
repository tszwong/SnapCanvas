import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as events from "events";

const Profile = ({ imageSrc, altText, id, name, major, description }) => {
    const [modalShow, setModalShow] = useState(false);

    // Handler for closing the modal
    const handleClose = (event) => {
        if (event) {
            event.stopPropagation();
        }
        console.log('Close button clicked');
        setModalShow(false);
    };


    return (
        <div className="col-3 polaroid" onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }}>
            <img src={imageSrc} alt={altText} className="img-fluid" id={id}/>
            <p id={"profile-photo-caption"}>{name}, {major}</p>

            <Modal show={modalShow} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {name} - {major}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*  add a short description of each member  */}
                    <img src={imageSrc} alt="profile photo" className={"img-fluid"}/>
                    {description}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Profile;
