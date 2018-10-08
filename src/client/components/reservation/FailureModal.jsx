import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

const CUSTOM_CONTENT = `Aktualnie mamy problem z usługą rezerwacji sal. Proszę spróbować później 
lub skontaktuj się z administratorem serwisu.`;

// eslint-disable-next-line react/prop-types
const OkButton = ({ onClick }) => (
  <button
    type="button"
    className="btn btn-danger"
    onClick={onClick}
  >
    Ok
  </button>
);

const FailureModal = ({ open, onCloseRequest, content }) => (
  <Modal
    open={open}
    onCloseRequest={onCloseRequest}
    title="Rezerwacja nie powiodła się"
    footer={<OkButton onClick={onCloseRequest} />}
  >
    {content}
  </Modal>
);

FailureModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseRequest: PropTypes.func.isRequired,
  content: PropTypes.node,
};

FailureModal.defaultProps = {
  content: CUSTOM_CONTENT,
};

export default FailureModal;

