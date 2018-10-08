import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

// eslint-disable-next-line react/prop-types
const OkButton = ({ onClick }) => (
  <button
    type="button"
    className="btn btn-success"
    onClick={onClick}
  >
    Ok
  </button>
);

const SuccessModal = ({ open, onCloseRequest }) => (
  <Modal
    open={open}
    onCloseRequest={onCloseRequest}
    title="Rezerwacja powiodła się"
    footer={<OkButton onClick={onCloseRequest} />}
  >
    Twoja rezerwacja przebiegła pomyślnie.
    W zakładce Kalendarz możesz sprawdzić Twoje dotychczasowe rezerwacje.
  </Modal>
);

SuccessModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseRequest: PropTypes.func.isRequired,
};

export default SuccessModal;

