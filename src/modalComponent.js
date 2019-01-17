import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'




<div className="static-modal">
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>One fine body...</Modal.Body>

    <Modal.Footer>
      <Button>Close</Button>
      <Button bsStyle="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
</div>;