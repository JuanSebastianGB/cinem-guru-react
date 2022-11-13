import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

const SearchBar = ({ title, setTitle }) => {
  const hendleInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="SearchBar">
      <FontAwesomeIcon icon={faSearch} />
      <input onChange={hendleInput}>{title}</input>
    </div>
  );
};

export default SearchBar;
