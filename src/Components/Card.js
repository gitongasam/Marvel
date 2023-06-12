import React, { useState } from 'react';
import './style.css';

export const Card = ({ data }) => {
  const { name, thumbnail, description } = data;
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='card' onClick={handleImageClick}>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <div className='title'>
          <h3>{name}</h3>
        </div>
        <div className='description'>
          <p>{description}</p>
        </div>
      </div>
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
            <div className='modal-description'>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <button className='modal-close' onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
