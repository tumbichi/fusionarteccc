/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { X } from 'react-feather';
import PropTypes from 'prop-types';

export default function Modal({ width, children, show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600 bg-opacity-40"
      onClick={onClose}
    >
      <div className={`relative w-full px-2 lg:${width} my-6 mx-auto max-w-3xl`}>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-6">
          <div className="flex justify-end">
            <X className="text-primary text-opacity-70 h-5" onClick={onClose} type="div" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-center text-primary font-bold text-lg md:text-xl mt-2.5 mb-4">
              !Gracias por registrarte!
            </h1>
          </div>
          <div className="relative flex-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
Modal.defaultProps = {
  width: '',
  children: null,
  show: false,
  onClose: () => null,
};

Modal.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};
