// import ImageCard from "../ImageCard/ImageCard";
// import css from './ImageGallery.module.css'

// const ImageGallery = ({ images, openModal }) => {
//     if (!images || images.length === 0) return null;
  
//     return (
//       <ul className={css.container}>
//         {images.map((image) => (
//           <li className={css.list} key={image.id} onClick={() => openModal(image)}>
//             <ImageCard image={image} />
//           </li>
//         ))}
//       </ul>
//     );
//   };
// export default ImageGallery;

import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  if (!images || images.length === 0) return null;

  return (
    <ul className={css.container}>
      {images.map(image => (
        <li className={css.list} key={image.id} onClick={() => openModal(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
