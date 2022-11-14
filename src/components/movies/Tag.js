import PropTypes from 'prop-types';
import { useState } from 'react';
import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);
  const handleTag = () => setSelected(!selected);
  return (
    <li onClick={handleTag} className="Tag">
      {genre}
    </li>
  );
};

Tag.propTypes = {
  genre: PropTypes.string,
  filter: PropTypes.bool,
  genres: PropTypes.arrayOf('string'),
  setGenres: PropTypes.func,
};

export default Tag;
