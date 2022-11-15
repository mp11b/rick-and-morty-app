import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Characters from '../Characters.js';

function EpisodesModal(props) {

    let [results, setResults] = React.useState(['']);

    reqApiCharacters();
  
    return( 
        <Modal
        {...props}
        size="lg"
        labelled="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {`Episode ${props.episode.id}: ${props.episode.name}`}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
      </Modal>
    );
}

export default EpisodesModal;