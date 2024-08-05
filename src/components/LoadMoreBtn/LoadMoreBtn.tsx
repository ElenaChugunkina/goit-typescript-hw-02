// import css from './LoadMoreBtn.module.css'
// const LoadMoreBtn = ({onClick}) => {
//     return (
//         <div className={css.container}>
//             <button type="submit" className={css.btnLoad} onClick={onClick} >Load more</button>
//         </div>
//     )
// }

// export default LoadMoreBtn;

import React from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button type="button" className={css.btnLoad} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
