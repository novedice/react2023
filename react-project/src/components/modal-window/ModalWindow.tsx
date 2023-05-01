import React from 'react';
import { ModalWindowProps } from './interface';
import './modal-window.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { CLOSE_MODAL_WINDOW } from '../../store/consts';

const ModalWindow = ({ children }: ModalWindowProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className="mask-window"
        onClick={() => {
          dispatch({ type: CLOSE_MODAL_WINDOW });
        }}
      />

      <div className="modal-window">
        <div
          className="close"
          onClick={() => {
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
