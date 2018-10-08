import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

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

const FailureModal = ({ open, onCloseRequest }) => (
  <Modal
    open={open}
    onCloseRequest={onCloseRequest}
    title="Rezerwacja nie powiodła się"
    footer={<OkButton onClick={onCloseRequest} />}
  >
    Aktualnie mamy problem z usługą rezerwacji sal. Proszę spróbować później lub skontaktować
    się z administracja serwisu.
  </Modal>
);

FailureModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseRequest: PropTypes.func.isRequired,
};

export default FailureModal;

