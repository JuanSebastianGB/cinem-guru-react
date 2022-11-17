import { useEffect, useState } from 'react';
import { movieAdapter } from '../../adapters/movie.adapter';
import Container from '../../components/general/Container';
import Title from '../../components/general/Title';
import MovieCard from '../../components/movies/MovieCard';
import { getFavorites } from '../../services/favorites.service';

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    getFavorites()
      .then((data) => setMovies(data.data))
      .catch((e) => setError(JSON.stringify(e)));
  }, []);
  return (
    <>
      <Container>
        <Title title="Movies you like" />
        <section className="grid-movies">
          {movies
            ? movies.map((movie) => (
                <MovieCard key={movie.id} movie={movieAdapter(movie)} />
              ))
            : null}
        </section>
      </Container>
    </>
  );
};
export default Favorites;
