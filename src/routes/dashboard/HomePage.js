import { useState } from 'react';
import Filter from '../../components/movies/Filter';

const HomePage = () => {
  const [title, setTitle] = useState('');

  return (
    <div className="HomePage">
      <Filter title={title} setTitle={setTitle} />
    </div>
  );
};
export default HomePage;
