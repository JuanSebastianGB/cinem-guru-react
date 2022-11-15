import { useState } from 'react';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';

const HomePage = () => {
  const [title, setTitle] = useState('');

  return (
    <div className="HomePage">
      <Filter title={title} setTitle={setTitle} />
      <MovieCard />
    </div>
  );
};
export default HomePage;
