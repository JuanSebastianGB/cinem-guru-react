import { faClockFour, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getFavorites } from '../../services/favorites.service';
import { getWatchLater } from '../../services/watchlater.service';
import './movies.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const handleFavorite = () => setIsFavorite(!isFavorite);
  const handleWatchLater = () => setIsWatchLater(!isWatchLater);

  useEffect(() => {
    getFavorites().then(console.log).catch(console.log);
    getWatchLater().then(console.log).then(console.log);
  }, []);
  return (
    <div className="MovieCard">
      <section>
        <img src="https://picsum.photos/100/100" alt=""></img>
        <div className="movie-card-cover"></div>
        <p className="movie-card-title">Title</p>
        <li>
          <FontAwesomeIcon
            className={`${isFavorite ? 'is-favorite' : ''}`}
            onClick={handleFavorite}
            icon={faClockFour}
            fontSize={25}
          />
          <FontAwesomeIcon
            className={`${isWatchLater ? 'is-watch-later' : ''}`}
            onClick={handleWatchLater}
            icon={faStar}
            fontSize={25}
          />
        </li>
      </section>
      <p className="movie-card-resume">
        A outsider comes to town and meets Three people in town as she meets
        them she gets each of them to b..
      </p>
      <div className="movie-card-tags"></div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};
export default MovieCard;
