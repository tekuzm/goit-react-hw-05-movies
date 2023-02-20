import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Search movie by name"
        autoComplete="off"
        autoFocus
        required
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
