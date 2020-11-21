import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ModaldWrapper } from './styles';

const ModalComponent = ({ isOpen, closeModal, height, width }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {},
        content: {
          background: 'red',
        },
      }}
    >
      <ModaldWrapper>
        <h2>MODAL</h2>
        <Button text="X" onClick={closeModal} />
      </ModaldWrapper>
    </Modal>
  );
};
ModalComponent.defaultProps = {
  isOpen: false,
  closeModal: () => {},
  height: '30px',
  width: '30px',
};
ModalComponent.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
};
export default ModalComponent;
