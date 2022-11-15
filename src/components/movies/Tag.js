import PropTypes from 'prop-types';
import { useState } from 'react';
import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);
  const handleTag = () => setSelected(!selected);
  return (
    <span>
      <li
        onClick={handleTag}
        className={`Tag ${selected ? 'movie-tag-bg-red' : ''}`}
      >
        {genre}
      </li>
    </span>
  );
};

Tag.propTypes = {
  genre: PropTypes.string,
  filter: PropTypes.bool,
  genres: PropTypes.arrayOf('string'),
  setGenres: PropTypes.func,
};

export default Tag;
