import React, { useEffect } from 'react';
import EditProductComponent from './EditProductComponent';

const EditProductModal = ({ isOpen, productId, closeModal }) => {
  useEffect(() => {
    // Add any necessary initialization or data fetching logic here
  }, [isOpen, productId]);

  return (
    <>
      {isOpen && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content">
            <EditProductComponent productId={productId} closeModal={closeModal} />
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
      )}
    </>
  );
};

export default EditProductModal;
