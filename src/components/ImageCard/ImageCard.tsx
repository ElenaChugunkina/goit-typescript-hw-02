// import css from './ImageCard.module.css'

// const ImageCard = ({ image }) => {
//     return (
//       <div>
//         <img className={css.image} src={image.urls.small} alt={image.alt_description} />
//       </div>
//     );
//   };



// export default ImageCard;

import React from 'react';
import css from './ImageCard.module.css';

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div>
      <img className={css.image} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
