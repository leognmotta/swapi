import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ClipLoader from 'react-spinners/ClipLoader';

import './index.scss';

interface Props {
  onSubmit: (text: string) => void;
  loading: boolean;
}

const Search: React.FC<Props> = ({ onSubmit, loading }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="form-container">
      <form
        onSubmit={async e => {
          e.preventDefault();

          onSubmit(search);

          setSearch('');
        }}
      >
        <label htmlFor="search">
          Search for planet:
          <input
            type="text"
            id="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </label>
        <button type="submit">
          {loading ? <ClipLoader size={18} /> : <FaSearch size={18} />}
        </button>
      </form>
    </div>
  );
};

export default Search;
