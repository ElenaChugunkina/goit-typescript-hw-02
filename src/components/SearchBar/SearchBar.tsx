

import React from 'react';

import css from './SearchBar.module.css';


import toast, { Toaster } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = (form.elements.namedItem('topic') as HTMLInputElement).value.trim();

    if (query === '') {
      toast.error('The field must not be empty.');
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button className={css.btn} type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;

