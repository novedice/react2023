import React from 'react';
import { ModalWindowProps } from './interface';
import './modal-window.css';
import { useAppDispatch, useTypeSelector } from '../../hooks/useAppDispatch';
import { CLOSE_MODAL_WINDOW } from '../../store/consts';

const ModalWindow = ({ children }: ModalWindowProps) => {
  const dispatch = useAppDispatch();
  const { modalWindow } = useTypeSelector((state) => state.modalWindow);

  return (
    <>
      <div
        className="mask-window"
        onClick={() => {
          console.log('in modal', modalWindow);
          dispatch({ type: CLOSE_MODAL_WINDOW });
        }}
      />

      <div className="modal-window">
        <div
          className="close"
          onClick={() => {
            console.log('in modal', modalWindow);
            dispatch({ type: CLOSE_MODAL_WINDOW });
          }}
        >
          x
        </div>
        {children}
      </div>
    </>
  );
};

export default ModalWindow;
