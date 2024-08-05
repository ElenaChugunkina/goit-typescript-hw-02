// import Modal from 'react-modal';
// import css from './ImageModal.module.css'
// import { IoIosCloseCircleOutline } from "react-icons/io";

// Modal.setAppElement('#root'); 
// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//       width: '90%',
//       height: '90%',
//       overflow: 'hidden',
//       backgroundColor: 'rgba(0, 0, 0, 0.85)',
      
      
      
      
      
//     },
//   };

// const ImageModal = ({ isOpen, image, onClose }) => {
//     if (!image || !image.urls.regular) {
//         return null; 
//       }
//     return (
//         <Modal 
//         isOpen={isOpen}
//         onRequestClose={onClose}
//         contentLabel="Image Modal"
      
//         style={customStyles}
        
//         >
//             <p className={css.btn}  onClick={onClose} ><IoIosCloseCircleOutline className={css.close}/></p>
       
//         <div className={css.imageContainer}>
//         <img src={image.urls.regular} alt={image.alt_description} className={css.image} />
//       </div>
//         </Modal>
        
//     )
// }

// export default ImageModal;

import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { IoIosCloseCircleOutline } from 'react-icons/io';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
};

interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
}

interface ImageModalProps {
  isOpen: boolean;
  image: Image | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onClose }) => {
  if (!image || !image.urls.regular) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <p className={css.btn} onClick={onClose}>
        <IoIosCloseCircleOutline className={css.close} />
      </p>
      <div className={css.imageContainer}>
        <img src={image.urls.regular} alt={image.alt_description} className={css.image} />
      </div>
    </Modal>
  );
};

export default ImageModal;
