import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
    if (!images || images.length === 0) return null;
  
    return (
      <ul className={css.container}>
        {images.map((image) => (
          <li className={css.list} key={image.id} onClick={() => openModal(image)}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    );
  };
export default ImageGallery;