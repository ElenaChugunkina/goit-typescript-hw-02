

//  import React, { useState } from 'react';
//  import SearchBar from "../SearchBar/SearchBar";
//  import axios from "axios";
//  import ImageGallery from "../ImageGallery/ImageGallery";
//  import Loader from '../Loader/Loader';
//  import ErrorMessage from '../ErrorMessage/ErrorMessage';
//  import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
//  import ImageModal from '../ImageModal/ImageModal';
 
 


//  const App = () => {
//    const [images, setImages] = useState([]);
//    const [loading, setLoading] = useState(false);
//    const [error, setError] = useState(false);
//    const [page, setPage] = useState(1);
//    const [query, setQuery] = useState('');
//    const [totalPages, setTotalPages] = useState(0);
//    const [modalIsOpen, setModalIsOpen] = useState(false); 
//    const [selectedImage, setSelectedImage] = useState(null);
 

//    const handleSearch = async (query) => {
//      try {
//        setLoading(true);
//        setError(false);
       
//        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//          params: {
//            query: query,
//            client_id: 'KJDJyT0_5VIK7I2KooxwjWFSUGsfOWGb6rXeAIJ9OPM',
//            per_page: 12,
//            page: 1, 
//          },
//        });
//        setImages(response.data.results); 
//        setPage(1);
//        setQuery(query);
//        setTotalPages(response.data.total_pages);
       
       
//      } catch (error) {
//       setError(true);
//      }
//      finally {
//        setLoading(false);
//      }
//    };

//     const handleLoadMoreBtn = async () => {
//       try {
//         setLoading(true);
//        setError(false);
//        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//          params: {
//            query: query,
//            client_id: 'KJDJyT0_5VIK7I2KooxwjWFSUGsfOWGb6rXeAIJ9OPM',
//            per_page: 12,
//            page: page + 1, 
//          },
//        });
//        setImages(prevImages => [...prevImages, ...response.data.results]);
//       setPage(prevPage => prevPage + 1);  
        
//       } catch (error) {
//         setError(true);

//       } finally {
//         setLoading(false);
//       }

//     };

//     const openModal = (image) => {
//       setSelectedImage(image);
//       setModalIsOpen(true);
//     };
  
//     const closeModal = () => {
//       setSelectedImage(null);
//       setModalIsOpen(false);
//     };

//    return (
//      <div>
//        <SearchBar  onSubmit={handleSearch} />
//        {error ? <ErrorMessage /> : <ImageGallery images={images} openModal={openModal} />}
       
//        {loading && <Loader />}
      
//        {page < totalPages && images.length > 0 && <LoadMoreBtn onClick={handleLoadMoreBtn} />}
//        <ImageModal isOpen={modalIsOpen} image={selectedImage} onClose={closeModal} />
      
         
      
     
      
      
//      </div>
//    );
//  };

//  export default App;


import React, { useState } from 'react';
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

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(false);
      
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query,
          client_id: 'KJDJyT0_5VIK7I2KooxwjWFSUGsfOWGb6rXeAIJ9OPM',
          per_page: 12,
          page: 1,
        },
      });
      setImages(response.data.results);
      setPage(1);
      setQuery(query);
      setTotalPages(response.data.total_pages);
      
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMoreBtn = async () => {
    try {
      setLoading(true);
      setError(false);
      
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query,
          client_id: 'KJDJyT0_5VIK7I2KooxwjWFSUGsfOWGb6rXeAIJ9OPM',
          per_page: 12,
          page: page + 1,
        },
      });
      setImages(prevImages => [...prevImages, ...response.data.results]);
      setPage(prevPage => prevPage + 1);
      
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
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
