import React from 'react';

const Modal = ({ title, description, onClose }) => {
  return (
    <>
    <div className="modal-backdrop fade show"></div>

    <div className="modal fade show" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Modal;