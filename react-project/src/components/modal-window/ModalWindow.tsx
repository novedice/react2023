import React from 'react';
import { ModalWindowProps } from './interface';
import './modal-window.css';

const ModalWindow = ({ children, closeWindow }: ModalWindowProps) => {
  return (
    <>
      <div className="mask-window" onClick={closeWindow} />
      <div className="modal-window">{children}</div>
    </>
  );
};

export default ModalWindow;
