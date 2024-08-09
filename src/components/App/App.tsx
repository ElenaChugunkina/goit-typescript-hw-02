

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (!query) return;
      
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query,
            client_id: 'KJDJyT0_5VIK7I2KooxwjWFSUGsfOWGb6rXeAIJ9OPM',
            per_page: 12,
            page,
          },
        });

        if (page === 1) {
          setImages(response.data.results);
        } else {
          setImages(prevImages => [...prevImages, ...response.data.results]);
        }
        
        setTotalPages(response.data.total_pages);

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1); 
  };

  const handleLoadMoreBtn = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error ? <ErrorMessage /> : <ImageGallery images={images} openModal={openModal} />}
      {loading && <Loader />}
      {page < totalPages && images.length > 0 && <LoadMoreBtn onClick={handleLoadMoreBtn} />}
      <ImageModal isOpen={modalIsOpen} image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default App;

