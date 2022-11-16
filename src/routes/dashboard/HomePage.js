import { useEffect, useState } from 'react';
import { movieAdapter } from '../../adapters/movie.adapter';
import Container from '../../components/general/Container';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';
import { loadMovies } from '../../services/filter.service';
import './dashboard.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMovies(page)
      .then((data) => setMovies(data.data.titles))
      .catch(console.log);
  }, []);

  return (
    <div className="HomePage">
      <Filter title={title} setTitle={setTitle} />
      <Container>
        <section class="homepage-movies">
          {movies.length > 0 &&
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movieAdapter(movie)} />
            ))}
        </section>
      </Container>
    </div>
  );
};
export default HomePage;
